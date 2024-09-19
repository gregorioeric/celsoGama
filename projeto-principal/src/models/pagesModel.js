const database = require("../database/database");

module.exports = class PagesModel {
  static async selectAllPages() {
    const selectAllPages = "SELECT * FROM pages;";
    const [[result]] = await database.query(selectAllPages);
    console.log(result);

    return result;
  }

  static async insertPages(page) {
    const { page_title, page_content, page_date } = page;
    const insertPages = `INSERT INTO pages(page_title, page_content, page_date) Values (?, ?, ?);`;
    const [result] = await database.query(insertPages, [
      page_title,
      page_content,
      page_date,
    ]);

    return result;
  }
};
