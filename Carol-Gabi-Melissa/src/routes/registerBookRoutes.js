const express = require("express");
const RegisterBookController = require("../controllers/registerBooksController");
const multer = require("multer");
const storage = require("../middlewares/uploadBookImgMiddleware");
const AuthAdminMiddleware = require("../middlewares/authAdminMiddleware");

const registerBookRoute = express.Router();

const upload = multer({ storage: storage });

registerBookRoute.get(
  "/",
  AuthAdminMiddleware.adminAuthorization,
  RegisterBookController.getRegisterBook
);

registerBookRoute.post(
  "/",
  upload.single("book_image"),
  RegisterBookController.postBook
);

registerBookRoute.get(
  "/editBook/:id",
  AuthAdminMiddleware.adminAuthorization,
  RegisterBookController.getEditBook
);

registerBookRoute.post(
  "/updateBook/:id",
  upload.single("book_image"),
  RegisterBookController.postUpdateBook
);

registerBookRoute.post(
  "/deleteBook/:id",
  upload.single("book_image"),
  RegisterBookController.postDeleteBook
);

registerBookRoute.post(
  "/deleteBookBySlug/:id",
  upload.single("book_image"),
  RegisterBookController.deleteBookBySlug
);

module.exports = registerBookRoute;
