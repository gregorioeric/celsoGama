const RegisterUserModel = require("../models/registerModel");

module.exports = class RegisterUserMiddleware {
  static async verifyFields(req, res, next) {
    const { ...data_user } = req.body;

    const regex_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regex_senha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$#@%*&!?])/;

    const regex_maiuscula = /^(?=.*[A-Z])/;
    const regex_minuscula = /^(?=.*[a-z])/;
    const regex_numero = /^(?=.*[0-9])/;
    const regex_caracter_especial = /^(?=.[$#@%&!?])/;
    if (
      !data_user.user_name ||
      !data_user.user_email ||
      !data_user.user_password ||
      !data_user.userConfirmPassword
    ) {
      return res.redirect(
        "/register?msgErrorFieldsEmpty=Os campos não podem estar vazios!"
      );
    }

    if (data_user.user_name.length < 3) {
      return res.redirect(
        "/register?msgErrorName=Nome precisa ter o mínimo de 3 caracteres!"
      );
    }

    if (!regex_email.test(data_user.user_email)) {
      return res.redirect("/register?msgErrorEmail=Digite um email válido!");
    }

    if (data_user.user_password !== data_user.userConfirmPassword) {
      return res.redirect(
        "/register?msgErrorPass=Senhas precisam ter letras maiusculas, minusculas, numeros e caracteres!"
      );
    }

    if (data_user.user_password !== data_user.userConfirmPassword) {
      return res.redirect("/register?msgErrorPass=Senhas não são iguais!");
    }

    const recebeEmailFromModel = await RegisterUserModel.getUserByEmail(
      data_user.user_email
    );

    if (recebeEmailFromModel) {
      return res.redirect(
        "/register?msgErrorEmail=Email já existe no sistema!"
      );
    }

    next();
  }
};
