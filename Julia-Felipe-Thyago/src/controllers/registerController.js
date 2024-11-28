const bcrypt = require("bcryptjs");
const RegisterUserModel = require("../models/registerModel");

class RegisterController {
  static async getRegister(req, res) {
    return res.render("register", {
      msgErrorName: req.query.msgErrorName,
      msgErrorCPF: req.query.msgErrorCPF,
      msgErrorCEP: req.query.msgErrorCEP,
      msgErrorTelefone: req.query.msgErrorTelefone,
      msgErrorEmail: req.query.msgErrorEmail,
      msgErrorPass: req.query.msgErrorPass,
      msgErrorFieldsEmpty: req.query.msgErrorFieldsEmpty,
      msgSucess: req.query.msgSucess,
      msg: "",
    });
  }

  static async postRegister(req, res) {
    const { ...data_user } = req.body;

    const passwordHashed = await bcrypt.hash(data_user.user_password, 10);

    const dataUser = {
      user_name: data_user.user_name,
      user_cpf: data_user.user_cpf,
      user_cep: data_user.user_cep,
      user_telefone: data_user.user_telefone,
      user_email: data_user.user_email,
      user_password: passwordHashed,
    };

    const result = await RegisterUserModel.insertUser(dataUser);

    return res.redirect("/login?msgSucess=Cadastro realizado com sucesso!");
  }
}
module.exports = RegisterController;
