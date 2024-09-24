const database = require("../database/database");

module.exports = class PagesModel {
  static async selectAllPages() {
    const selectAllPages = "SELECT * FROM pages;";
    const [result] = await database.query(selectAllPages);

    return result;
  }

  static async selectPageById(page_id) {
    const selectAllPages = "SELECT * FROM pages WHERE page_id = ?;";
    const [[result]] = await database.query(selectAllPages, [page_id]);

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

  static async updatePage(page_id, page) {
    const { page_title, page_content } = page;
    const insertPages = `UPDATE pages SET page_title = ?, page_content = ? WHERE page_id = ?;`;
    const [result] = await database.query(insertPages, [
      page_title,
      page_content,
      page_id,
    ]);

    return result;
  }

  static async deletePage(page_id) {
    const insertPages = `DELETE FROM pages WHERE page_id = ?;`;
    const [result] = await database.query(insertPages, [page_id]);

    return result;
  }
};
