class DashboardController {
  static async getDashboard(req, res) {
    const msgSuccess = req.query.msgSuccess;
    const adminUser = req.session.adminUser;

    console.log(req.session);

    console.log(adminUser);

    res.render("dashboard", {
      adminUser,
      msgSuccess,
    });
  }
}

module.exports = DashboardController;
