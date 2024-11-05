const express = require("express");
const multer = require("multer");
const storage = require("../middlewares/uploadImageMiddleware");
const UploadImagesAdminController = require("../controllers/uploadImagesAdminController");

const uploadAdmin = express.Router();

const upload = multer({ storage: storage });

uploadAdmin.get("/", UploadImagesAdminController.getUploadAdminImages);

uploadAdmin.post(
  "/",
  upload.single("user_upload"),
  UploadImagesAdminController.postUploadAdminImages
);

module.exports = uploadAdmin;
