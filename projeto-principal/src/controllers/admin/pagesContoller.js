const PagesModel = require("../../models/pagesModel");

module.exports = class PagesController {
  static async getPages(req, res) {
    const adminUser = req.session.adminUser;
    const result = await PagesModel.selectAllPages();
    return res.render("pages", {
      adminUser,
      pages: result,
      msgSuccess: req.query.msgSuccess,
      msgError: req.query.msgError,
    });
  }

  static async deletePage(req, res) {
    const getId = req.params.id;

    const result = await PagesModel.deletePage(getId);
    console.log(result);

    return res.redirect("/pages");
  }
};
