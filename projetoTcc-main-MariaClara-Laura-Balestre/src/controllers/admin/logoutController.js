class LogoutController {
  static async logout(req, res) {
    req.session.logged = false;
    res.clearCookie("token");

    res.redirect("/");
  }
}

module.exports = LogoutController;
