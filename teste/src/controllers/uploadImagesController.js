module.exports = class UploadImagesController {
  static async getUploadImages(req, res) {
    return res.render("uploadImages", { message: "" });
  }
  static async postUploadImages(req, res) {
    // const image = req.body;

    return res.render("uploadImages", { message: "" });
  }
};
