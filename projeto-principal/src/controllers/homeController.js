const PagesModel = require("../models/pagesModel");

class HomeController {
  static async getHome(req, res) {
    const result = await PagesModel.selectJoinPagesPosition();

    return res.render("index", { pages: result });
  }
}

module.exports = HomeController;
