const bcrypt = require("bcryptjs");
const RegisterUserModel = require("../models/registerUserModels");

class RegisterController {
  static async getRegister(req, res) {
    return res.render("register", {
      msgError: req.query.msgError,
      msg: "",
    });
  }

  static async postRegister(req, res) {
    const { user_name, user_email, user_password } = req.body;

    const passwordHashed = await bcrypt.hash(user_password, 10);

    const userData = {
      user_name,
      user_email,
      user_password: passwordHashed,
    };

    const resultInsert = await RegisterUserModel.postUser(userData);

    if (!resultInsert) {
      return res.redirect("/?msgError=Nao foi possivel realizar o cadastro");
    }

    return res.redirect("/?msgSucess=Cadastro Realizado com Sucesso");
  }
}

module.exports = RegisterController;
