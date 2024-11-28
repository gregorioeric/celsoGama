const PagesModel = require("../models/pagesModel");

class DicasController {
  static async getdicas(req, res) {
    const result = await PagesModel.selectJoinPagesPosition();
    return res.render("dicas", {
      pages: result,
    });
  }
}

module.exports = DicasController;
