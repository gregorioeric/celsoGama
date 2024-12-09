const PagesModel = require("../models/pagesModel");

module.exports = class NoticiasController {
  static async getNoticias(req, res) {
    const getPages = await PagesModel.selectJoinPagesPosition();
    return res.render("noticias", {
      pages: getPages,
    });
  }
};
