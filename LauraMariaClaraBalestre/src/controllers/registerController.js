const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const RegisterUserModel = require("../models/registerUserModels");

class RegisterController {
  static async getRegister(req, res) {
    return res.render("loginRegister", {
      msgError: req.query.msgError,
      msgSuccess: req.query.msgSuccess,
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
      expiresIn: 60 * 60 * 1000,
    });

    res.cookie("token", token, { maxAge: 60 * 60 * 1000, httpOnly: true });

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
      req.message = {
        msgErrorDB: "Não foi possível realizar o cadastro!",
      };
      return res.render("loginRegister", {
        msg: req.message,
      });
    }

    req.message = {
      msgSuccess: "Cadastro realizado com sucesso",
    };
    return res.render("loginRegister", {
      msg: req.message,
    });
  }
}

module.exports = RegisterController;
