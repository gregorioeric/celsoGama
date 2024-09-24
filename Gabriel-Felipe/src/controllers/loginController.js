class LoginController {
  static async getlogin(req, res) {
    return res.render("login");
  }

  static async postlogin(req, res) {
    req.session.logged = true;
    return res.redirect("/");
  }
}

module.exports = LoginController;
