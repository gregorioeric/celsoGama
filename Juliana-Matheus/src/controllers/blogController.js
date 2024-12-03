const PagesModel = require("../models/pagesModel");

class BlogController {
  static async getblog(req, res) {
    const result = await PagesModel.selectJoinPagesPosition();
    return res.render("blog", {
      pages: result,
    });
  }
}

module.exports = BlogController;
