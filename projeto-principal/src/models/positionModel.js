const database = require("../database/database");

module.exports = class PositionModel {
  static async selectAllPosition() {
    const selectAllPosition = "SELECT * FROM position;";
    const [result] = await database.query(selectAllPosition);

    return result;
  }
};
