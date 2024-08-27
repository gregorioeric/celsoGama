const AdminModel = require("../../models/adminModel");

class AdminController {
  static async getAdmin(req, res) {
    res.render("admin");
  }

  static async postAdmin(req, res) {
    const {admin_email} = req.body;
    const result = await AdminModel.selectAdminByEmail(admin_email);
    console.log(result);
    
    res.redirect("dashboard");
  }
}

module.exports = AdminController;
