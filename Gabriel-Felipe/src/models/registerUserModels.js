const database = require("../database/database");

module.exports = class RegisterUserModel {
  static async getByEmail(getEmailFromUserController) {
    const { user_email } = getEmailFromUserController;
    const selectEmail = "SELECT * FROM users WHERE user_email = ?";
    const [[result]] = await database.query(selectEmail, [user_email]);

    return result;
  }
};
