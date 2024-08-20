class LoginUsesrControllers {
  static async getLoginRegister(req, res) {
    return res.render("loginRegister", { msg: "" });
  }

  static async postLogin(req, res) {
    return res.redirect("profile");
  }
}

module.exports = LoginUsesrControllers;
