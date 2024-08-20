class LoginController {
    static async getlogin(req,res) {
        return res.render ("login");
    }

    static async postlogin(req,res) {
        return res.redirect ("/");
    }
}

module.exports = LoginController;