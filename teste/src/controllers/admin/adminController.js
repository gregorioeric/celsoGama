class AdminController {
  static async getAdmin(req, res) {
    res.render("admin");
  }

  static async postAdmin(req, res) {
    res.redirect("dashboard");
  }
}

module.exports = AdminController;
