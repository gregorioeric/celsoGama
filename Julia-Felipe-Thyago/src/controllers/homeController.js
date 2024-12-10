const PagesModel = require("../models/pagesModel");
const PostReclamacoesModel = require("../models/postReclamacoesModel");

module.exports = class HomeController {
  static async getHome(req, res) {
    const result = await PostReclamacoesModel.selectJoinAllPosts();
    const resultPages = await PagesModel.selectJoinPagesPosition();

    return res.render("index", {
      posts: result,
      pages: resultPages,
    });
  }
};
