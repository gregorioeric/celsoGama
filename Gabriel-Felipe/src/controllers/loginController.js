const RegisterUserModel = require("../models/registerUserModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class LoginController {
  static async getlogin(req, res) {
    return res.render("login", {
      msgError: req.query.msgError,
      msgSuccess: req.query.msgSuccess,
    });
  }

  static async postlogin(req, res) {
    const { user_email, user_password } = req.body;
    const resultDB = await RegisterUserModel.getUserByEmail(user_email);

    if (!user_email || !user_password) {
      return res.redirect("/?msgError=Campos não podem ser vazios!");
    }

    if (!resultDB) {
      return res.redirect("/?msgError=Email não encontrado!");
    }

    const verifyPassword = await bcrypt.compare(
      user_password,
      resultDB.user_password
    );

    if (!verifyPassword) {
      return res.redirect("/?msgError=Senha Incorreta");
    }

    const token = jwt.sign({ user: resultDB }, process.env.SECRET, {
      expiresIn: 24 * 60 * 60 * 1000,
    });

    res.cookie("token", token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true });

    req.session.logged = true;
    req.session.user = resultDB;

    return res.redirect("/");
  }
}

module.exports = LoginController;
