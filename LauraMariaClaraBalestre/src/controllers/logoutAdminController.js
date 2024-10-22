module.exports = class LogoutAdminController {
  static async LogoutAdmin(req, res) {
    req.session.logged = false;
    res.clearCookie("tokenAdmin");
    res.redirect("/admin");
  }
}
