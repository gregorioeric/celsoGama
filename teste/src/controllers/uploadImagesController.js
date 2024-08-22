const path = require("path");
const UploadImagesModel = require("../models/uploadImagesModel");

module.exports = class UploadImagesController {
  static async getUploadImages(req, res) {
    const results = await UploadImagesModel.getAllImages();

    return res.render("uploadImages", { message: "", results });
  }
  static async postUploadImages(req, res) {
    const user_image_date = new Date().toJSON().slice(0, 19).replace("T", " ");
    console.log(req.file);

    if (!req.file) {
      req.message = {
        msgErrorUpload:
          "Opa você precisa selecionar uma imagem para realizar o Upload",
      };
      return res.render("uploadImages", {
        message: req.message,
        results: [],
      });
    }

    const user_image_path = req.file.filename;
    const imgData = {
      user_image_path,
      user_image_date,
    };

    const results = await UploadImagesModel.postImages(imgData);

    if (!results) {
      req.message = {
        msgErrorUpload: "Não Foi possivel fazer Upload da imagem!",
      };
      return res.render("uploadImages", { message: req.message });
    }

    // req.message = {
    //   msgErrorUpload: "Upload da imagem realizado com sucesso!",
    // };
    // return res.render("uploadImages", { message: req.message });
    return res.redirect("/uploadImages");
  }
};
