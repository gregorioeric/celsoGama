class DashboardController {
  static async getDashboard(req, res) {
    res.render("index");
  }
}

module.exports = DashboardController;
