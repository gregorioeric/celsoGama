const database = require("../database/database");

module.exports = class RegisterUserModel {
  static async getUserByEmail(getEmailFromUserController) {
    const selectEmail = "SELECT * FROM users WHERE user_email = ? ";
    const [[result]] = await database.query(selectEmail, [
      getEmailFromUserController,
    ]);
    return result;
  }

  static async getUserById(getIdFromUserController) {
    const selectEmail = "SELECT * FROM users WHERE user_id = ?";
    const [[result]] = await database.query(selectEmail, [
      getIdFromUserController,
    ]);
    return result;
  }

  static async postUser(userDate) {
    const { user_name, user_email, user_password, user_date } = userDate;
    const insertUser =
      "INSERT INTO users(user_name, user_email, user_password, user_date) VALUES (?, ?, ?, ?)";
    const [result] = await database.query(insertUser, [
      user_name,
      user_email,
      user_password,
      user_date,
    ]);

    return result;
  }
};
