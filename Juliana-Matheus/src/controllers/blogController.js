const PagesModel = require("../models/pagesModel");

class BlogController {
  static async getblog(req, res) {
    const result = await PagesModel.selectJoinPagesPosition();
    res.render("blog", {
      pages: result,
    });
  }
}

module.exports = BlogController;
