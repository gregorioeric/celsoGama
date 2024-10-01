module.exports = class PagesController {
  static async getPage(req, res) {
    return res.render("page", {
      adminUser: req.session.adminUser,
      msgSuccess: req.query.msgSuccess,
    });
  }
};
