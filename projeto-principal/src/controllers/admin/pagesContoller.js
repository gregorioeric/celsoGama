const PagesModel = require("../../models/pagesModel");
const PositionModel = require("../../models/positionModel");

module.exports = class PagesController {
  static async getPages(req, res) {
    const adminUser = req.session.adminUser;
    const result = await PagesModel.selectJoinPagesPosition();

    return res.render("pages", {
      adminUser,
      pages: result,
      msgSuccess: req.query.msgSuccess,
      msgError: req.query.msgError,
    });
  }

  static async getCreatePages(req, res) {
    const adminUser = req.session.adminUser;
    const getPosition = await PositionModel.selectAllPosition();

    return res.render("createPages", {
      adminUser,
      getPosition,
      msgSuccess: req.query.msgSuccess,
      msgError: req.query.msgError,
    });
  }

  static async postCreatePages(req, res) {
    const { page_title, page_position_id, page_status, page_content } =
      req.body;
    const page_date = new Date().toJSON().slice(0, 19).replace("T", " ");

    const statusBoolean = page_status === "Publicado" ? 1 : 0;
    const position_position_id = Number(page_position_id);

    const page = {
      page_title,
      page_status: statusBoolean,
      page_content,
      page_date,
      position_position_id,
    };
    // console.log(page);

    const result = await PagesModel.insertPages(page);
    console.log(result);

    return res.redirect(
      "/pages/createPages?msgSuccess=Pagina criada com sucesso!"
    );
  }

  static async getEditPage(req, res) {
    const adminUser = req.session.adminUser;
    const getParams = req.params.id;

    // const result = await PagesModel.selectPageById(getParams);
    const result = await PagesModel.selectJoinPagesPositionById(getParams);
    // console.log(resultJoin);

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

  static async deletePage(req, res) {
    const getId = req.params.id;

    const result = await PagesModel.deletePage(getId);
    console.log(result);

    return res.redirect("/pages");
  }
};
