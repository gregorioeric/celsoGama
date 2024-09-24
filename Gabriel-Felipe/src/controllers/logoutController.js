module.exports = class LogoutController {
  static async logout(req, res) {
    req.session.logged = false;
    return res.redirect("/");
  }
};
