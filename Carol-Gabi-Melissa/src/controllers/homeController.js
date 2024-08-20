class HomeController {
  static async getHome(req, res) {
    res.render("index");
  }
  static async postHome(req, res) {
    res.redirect("/index");
  }
}

module.exports = HomeController;
