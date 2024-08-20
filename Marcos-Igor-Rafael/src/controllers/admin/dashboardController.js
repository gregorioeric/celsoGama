class DashboardController {
  static async getDashboard(req, resq) {
    resq.render("dashboard");
  }
}

module.exports = DashboardController;
