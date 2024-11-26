const PagesModel = require("../models/pagesModel");

class HomeController {
  static async getHome(req, res) {
    const results = await PagesModel.selectJoinPagesPosition();

    return res.render("home", { pages: results });
  }
}

module.exports = HomeController;
