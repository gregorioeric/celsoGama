const PagesModel = require("../models/pagesModel");

class QuemsomosController {
  static async getQuemsomos(req, res) {
    const result = await PagesModel.selectJoinPagesPosition();
    return res.render("quemsomos", {
      pages: result,
    });
  }
}

module.exports = QuemsomosController;
