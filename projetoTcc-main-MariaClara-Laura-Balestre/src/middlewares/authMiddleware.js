const jwt = require("jsonwebtoken");
const RegisterUserModel = require("../models/registerUserModels");

module.exports = class AuthMiddleware {
  static async authorization(req, res, next) {
    const { token } = req.cookies;

    if (!token) {
      return res.redirect(
        "/loginRegister?msgError=Você precisa se autenticar para acessar o seu Perfil!"
      );
    }

    const verifyToken = jwt.verify(token, process.env.SECRET);

    const result = await RegisterUserModel.getUserById(
      verifyToken.user.user_id
    );

    if (!result) {
      return res.redirect(
        "/loginRegister?msgError=Você precisa se autenticar para acessar ser Perfil!"
      );
    }

    next();
  }
};
