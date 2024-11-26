const jwt = require('jsonwebtoken');
const RegisterUserModel = require('../models/registerUserModels');


module.exports = class AuthMiddleware {
    static async authorization(req, res, next) {
        const {token} = req.cookies;
        console.log(token);

        if (!token) {
            return res.redirect(
                "/loginRegister?msgError=Você precisa se autenticar para acessar o seu Perfil!"
            );
        }

        const verifyToken = jwt.verify(token, process.env.SECRET);
        console.log(verifyToken);

        const result = await RegisterUserModel.getUserById(verifyToken.user.user_id);
        console.log(result);

        if (!result) {
            return res.redirect(
                "/loginRegister?msgError=Você precisa se autenticar para acessar ser Perfil!"
            );
            
        }
        
        next();
    }
};