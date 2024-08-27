class LoginUsesrControllers {
  static async getLoginRegister(req, res) {
    const message = req.query.message;
    return res.render("loginRegister", { msg: "", message });
  }

  static async postLogin(req, res) {
    return res.redirect("profile");
  }
}

module.exports = LoginUsesrControllers;
