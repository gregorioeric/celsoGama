const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const RegisterUserModel = require("../models/registerUserModels");

class RegisterController {
  static async getRegister(req, res) {
    return res.render("loginRegister", {
      msgError: req.query.msgError,
      msgSuccess: req.query.msgSuccess,
      msgFieldsEmpty: req.query.msgFieldsEmpty,
      msgNameError: req.query.msgNameError,
      msgPassError: req.query.msgPassError,
      passwordError: req.query.passwordError,
      msgErrorEmail: req.query.msgErrorEmail,
      msgErrorDB: req.query.msgErrorDB,
      msg: "",
    });
  }

  static async postLogin(req, res) {
    const { user_email, user_password } = req.body;
    const resultDB = await RegisterUserModel.getUserByEmail(user_email);

    if (!user_email || !user_password) {
      return res.redirect(
        "/loginRegister?msgError=Campos não podem ser vazios!"
      );
    }

    if (!resultDB) {
      return res.redirect("/loginRegister?msgError=Email não encontrado!");
    }

    const verifyPassword = await bcrypt.compare(
      user_password,
      resultDB.user_password
    );

    if (!verifyPassword) {
      return res.redirect("/loginRegister?msgError=senha esta errada!");
    }

    const token = jwt.sign({ user: resultDB }, process.env.SECRET, {
      expiresIn: 24 * 60 * 60 * 1000,
    });

    res.cookie("token", token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true });

    req.session.logged = true;
    req.session.user = resultDB;

    req.session.logged = true;

    return res.redirect("/");
  }

  static async postRegister(req, res) {
    const { user_name, user_email, user_password } = req.body;
    const user_date = new Date().toJSON().slice(0, 19).replace("T", "  ");

    const passwordHashed = await bcrypt.hash(user_password, 10);

    const userDate = {
      user_name,
      user_email,
      user_password: passwordHashed,
      user_date,
    };

    const resultInsert = await RegisterUserModel.postUser(userDate);

    if (!resultInsert) {
      // req.message = {
      //   msgErrorDB: "Não foi possível realizar o cadastro!",
      // };
      return res.redirect(
        "/loginRegister?msgErrorDB=Não foi possível realizar o cadastro!"
      );
    }

    // req.message = {
    //   msgSuccess: "Cadastro realizado com sucesso",
    // };
    return res.redirect(
      "/loginRegister?msgSuccess=Cadastro realizado com sucesso! Você já pode efetuar o login!"
    );
  }
}

module.exports = RegisterController;
