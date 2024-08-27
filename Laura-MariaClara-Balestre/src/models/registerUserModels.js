const database = require("../database/database");

module.exports = class RegisterUserModel {
  static getUserByEmail(getEmailFromUserController) {
    const selectEmail = "SELECT user_email FROM users WHERE user_email = ?";
    return new Promise((resolve, reject) => {
      database.query(
        selectEmail,
        getEmailFromUserController,
        (error, result) => {
          console.log("Estamos no Model");
          console.log(getEmailFromUserController);
          console.log(result);
          return resolve(result);
        }
      );
    });
  }
};
