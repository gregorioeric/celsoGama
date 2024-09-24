const PagesModel = require("../../models/pagesModel");

module.exports = class CreatePagesController {
  static async getCreatePages(req, res) {
    const adminUser = req.session.adminUser;
    return res.render("createPages", {
      adminUser,
      msgSuccess: req.query.msgSuccess,
      msgError: req.query.msgError,
    });
  }

  static async postCreatePages(req, res) {
    const { page_title, page_content } = req.body;
    const page_date = new Date().toJSON().slice(0, 19).replace("T", " ");

    const page = {
      page_title,
      page_content,
      page_date,
    };

    const result = await PagesModel.insertPages(page);
    // console.log(result);

    return res.redirect(
      "/pages/createPages?msgSuccess=Pagina criada com sucesso!"
    );
  }
};
