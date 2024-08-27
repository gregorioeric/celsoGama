const database = require("../database/database");

module.exports = class AdminLoginModel {
  static async getUserByEmail(getEmailFromUserController) {
    const selectEmail = "SELECT * FROM users WHERE user_email = ?";
    const [[result]] = await database.query(selectEmail, [
      getEmailFromUserController,
    ]);
    return result;
  }
};
