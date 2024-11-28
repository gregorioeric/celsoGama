const database = require("../database/database");

class RegisterUserModel {
  static async getUserByEmail(getEmailFromUserController) {
    const selectEmail = "SELECT * FROM users WHERE user_email = ?";
    const [[result]] = await database.query(selectEmail, [
      getEmailFromUserController,
    ]);

    return result;
  }

  static async selectUserById(user_id) {
    const selectEmail = "SELECT * FROM users WHERE user_id = ?";
    const [[result]] = await database.query(selectEmail, [user_id]);

    return result;
  }

  static async getAllUser() {
    const selectAllUsers = "SELECT * FROM users";
    const [result] = await database.query(selectAllUsers);

    return result;
  }

  static async insertUser(data_user) {
    const {
      user_name,
      user_cpf,
      user_cep,
      user_telefone,
      user_email,
      user_password,
    } = data_user;
    const insertUser = `INSERT INTO users(
          user_name, 
          user_cpf, 
          user_cep, 
          user_telefone, 
          user_email, 
          user_password) 
      VALUES 
          (?, ?, ?, ?, ?, ?)`;
    const [result] = await database.query(insertUser, [
      user_name,
      user_cpf,
      user_cep,
      user_telefone,
      user_email,
      user_password,
    ]);

    return result;
  }

  static async updateUser(user_id, data_user) {
    const {
      user_name,
      user_cpf,
      user_cep,
      user_telefone,
      user_email,
      user_img_profile,
    } = data_user;
    const updateUser = `UPDATE users SET 
          user_name = ?, 
          user_cpf = ?, 
          user_cep = ?, 
          user_telefone = ?, 
          user_email = ?, 
          user_img_profile = ? 
        WHERE 
          user_id = ?;`;
    const [result] = await database.query(updateUser, [
      user_name,
      user_cpf,
      user_cep,
      user_telefone,
      user_email,
      user_img_profile,
      user_id,
    ]);

    return result;
  }
}

module.exports = RegisterUserModel;
