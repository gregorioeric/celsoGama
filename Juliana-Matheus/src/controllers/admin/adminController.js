class AdminController {
  static async getAdmin(req, res) {
    res.render("admin");
  }

  static async postAdmim(req, res) {
    res.redirect("dashboard");
  }
}

module.exports = AdminController;
