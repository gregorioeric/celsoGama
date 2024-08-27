class LoginController {
  static async getLogin(req, res) {
    const message = req.query.message;
    res.render("login", { message });
  }

  static async postLogin(req, res) {
    res.redirect("profile");
  }
}

module.exports = LoginController;
