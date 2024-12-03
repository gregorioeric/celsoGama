const PagesModel = require("../models/pagesModel");

class ContatoController {
  static async getContato(req, res) {
    const getPages = await PagesModel.selectJoinPagesPosition();
    res.render("contato", {
      pages: getPages,
    });
  }
}

module.exports = ContatoController;
