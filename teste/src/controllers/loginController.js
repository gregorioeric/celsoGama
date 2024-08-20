class LoginController {
  static async getLogin(req, res) {
    res.render("login");
  }

  static async postLogin(req, res) {
    res.redirect("profile");
  }
}

module.exports = LoginController;
