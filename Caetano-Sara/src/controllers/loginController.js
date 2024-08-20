class LoginController {
  static async getLogin(req, res) {
    return res.render("login");
  }

  static async postLogin(req, res) {
    return res.redirect("profile");
  }
}

module.exports = LoginController;
