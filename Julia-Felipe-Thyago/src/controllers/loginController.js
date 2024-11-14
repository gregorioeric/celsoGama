const RegisterUserModel = require("../models/registerUserModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class LoginController {
  static async getLogin(req, res) {
    return res.render("login", {
      msgError: req.query.msgError,
      msgSuccess: req.query.msgSuccess,
    });
  }

  static async postLogin(req, res) {
    const { user_email, user_password } = req.body;
    const resultDB = await RegisterUserModel.getUserByEmail(user_email);
    if (!user_email || !user_password) {
      return res.redirect("/login?msgError=Campos não podem ser vazios!");
    }

    if (!resultDB) {
      return res.redirect("/login?msgError=Email não encontrado!");
    }

    const verifyPassword = await bcrypt.compare(
      user_password,
      resultDB.user_password
    );

    if (!verifyPassword) {
      return res.redirect("/login?msgError=A senha está errada!");
    }

    const token = jwt.sign({ user_id: resultDB.user_id }, process.env.SECRET, {
      expiresIn: 60 * 60 * 1000,
    });

    res.cookie("token", token, { maxAge: 60 * 60 * 1000, httpOnly: true });

    req.session.logged = true;
    req.session.userProfile = resultDB;

    return res.redirect("reclamacoes");
  }
}

module.exports = LoginController;
