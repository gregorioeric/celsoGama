const RegisterUserModel = require("../models/registerUserModels");
const bcript = require("bcryptjs");

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
      msgSuccess: req.query.msgSuccess,
    });
  }

  static async postRegister(req, res) {
    const { ...data_user } = req.body;
    console.log(data_user);

    const regex_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regex_senha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$#@%*&!?])/;

    if (
      !data_user.user_name ||
      !data_user.user_email ||
      !data_user.user_password ||
      !data_user.userConfirmPassword
    ) {
      return res.redirect(
        "/register?msgErrorFieldsEmpty=Os campos não podem ser vazios!"
      );
    }

    if (data_user.user_name.length < 3) {
      return res.redirect(
        "/register?msgErrorName=Nome precisa ter o minimo de 3 caracteres!"
      );
    }

    if (!regex_email.test(data_user.user_email)) {
      return res.redirect("/register?msgErrorEmail=Digite um email valido!");
    }

    if (!regex_senha.test(data_user.user_password)) {
      return res.redirect(
        "/register?msgErrorPass=Senhas precisa ter Letras Maisculas, Minusculas, Numeros e Caracteres especiais!"
      );
    }

    if (data_user.user_password !== data_user.userConfirmPassword) {
      return res.redirect("/register?msgErrorPass=Senhas nao sao iguais");
    }

    const receiveEmailFromModel = await RegisterUserModel.getByEmail(
      data_user.user_email
    );

    if (receiveEmailFromModel) {
      return res.redirect(
        "/register?msgErrorEmail=Email já existe em nosso sistema!"
      );
    }

    const passwordHashed = await bcript.hash(data_user.user_password, 10);

    const dataUser = {
      user_name: data_user.user_name,
      user_cpf: data_user.user_cpf,
      user_cep: data_user.user_cep,
      user_telefone: data_user.user_telefone,
      user_email: data_user.user_email,
      user_password: passwordHashed,
    };

    const result = await RegisterUserModel.insertUser(dataUser);

    console.log(result);

    return res.redirect("/login?msgSuccess=Cadastro realizado com sucesso!");
  }
}

module.exports = RegisterController;
