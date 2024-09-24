const PagesModel = require("../../models/pagesModel");

module.exports = class EditPageController {
  static async getEditPage(req, res) {
    const adminUser = req.session.adminUser;
    const getParams = req.params.id;

    const result = await PagesModel.selectPageById(getParams);

    return res.render("editPage", {
      adminUser,
      msgSuccess: req.query.msgSuccess,
      msgError: req.query.msgError,
      result,
    });
  }

  static async putEditPage(req, res) {
    const getDataUpdate = req.body;
    const getParams = req.params.id;

    const result = await PagesModel.updatePage(getParams, getDataUpdate);

    console.log(result);

    return res.redirect("/pages?msgSuccess=Atualizado com sucesso!");
  }
};
