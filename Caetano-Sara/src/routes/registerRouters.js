const express = require("express");
const RegisterController = require("../controllers/regiterController");

const registerRoute = express.Router();

registerRoute.get("/", RegisterController.getRegister);

registerRoute.post("/", RegisterController.postRegister);

module.exports = registerRoute;
