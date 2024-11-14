const database = require("../database/database");

module.exports = class AdminModel {
  static async selectAdminByEmail(admin_email) {
    const selectAdminEmail = "SELECT * FROM admin_users WHERE admin_email = ?;";
    const [[result]] = await database.query(selectAdminEmail, [admin_email]);

    return result;
  }
};
