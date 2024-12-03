const PagesModel = require("../models/pagesModel");

class HomeController {
  static async getHome(req, res) {
    const getPages = await PagesModel.selectJoinPagesPosition();
    res.render("index", {
      pages: getPages,
    });
  }
}

module.exports = HomeController;
