const PostReclamacoesModel = require("../models/postReclamacoesModel");

module.exports = class HomeController {
  static async getHome(req, res) {
    const result = await PostReclamacoesModel.selectJoinAllPosts();

    return res.render("index", {
      posts: result,
    });
  }
};
