module.exports = class HomeController {
  static async getHome(req, res) {
    return res.render("index");
  }
};
