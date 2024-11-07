module.exports = class HomeController {
  static async getHome(req, res) {
    res.render("home");
  }
};
