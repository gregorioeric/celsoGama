const jwt = require('jsonwebtoken');

module.exports = class AuthAdminMiddleware{
    static async adminAuthorization(req,res, next){
        const {tokenAdmin} = req.cookies;

        if (!tokenAdmin) {
            res.redirect('/admin?msgError=Você Precisa se autenticar')
        }
        

        next();
    }
}