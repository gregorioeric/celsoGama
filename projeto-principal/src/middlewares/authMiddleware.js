const jwt = require("jsonwebtoken");
const LoginRegisterModel = require("../models/registerUserModels");

module.exports = class AuthMiddleware {
  static async authorization(req, res, next) {
    const { token } = req.cookies;

    if (!token) {
      return res.redirect(
        "/loginRegister?msgError=Você precisa se autenticar para acessar seu Perfil!"
      );
    }

    const verifyToken = jwt.verify(token, process.env.SECRET);

    const result = await LoginRegisterModel.getUserById(verifyToken.user_id);

    if (!result) {
      return res.redirect(
        "/loginRegister?msgError=Você precisa se autenticar para acessar seu Perfil!"
      );
    }

    next();
  }
};
