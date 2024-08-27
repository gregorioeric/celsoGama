const express = require("express");
const RegisterBookController = require("../controllers/registerBooksController");

const registerBookRoute = express.Router();

registerBookRoute.get("/", RegisterBookController.getRegisterBook);

registerBookRoute.post("/", RegisterBookController.postBook);

module.exports = registerBookRoute;
