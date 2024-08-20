const express = require("express");
const RegisterController = require("../controllers/admin/registerController");

const registerRoute = express.Router();

registerRoute.get("/", RegisterController.getRegister);

registerRoute.post("/", RegisterController.postRegister);

module.exports = registerRoute;
