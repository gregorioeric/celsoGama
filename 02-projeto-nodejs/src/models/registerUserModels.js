const database = require("../database/database");

module.exports = class RegisterUserModel {
  getByEmail(getEmailFromUserController) {
    const selectEmail = "SELECT user_email FROM users WHERE user_email = ?";
    console.log("Estamos no Model");
    console.log(getEmailFromUserController);
  }
};

// database.query(
//   selectEmail,
//   [getEmailFromUserController],
//   (error, result) => {
//     console.log("Estamos no Model");
//     console.log(getEmailFromUserController);

//     return result;
//   }
// );
