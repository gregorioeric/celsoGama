const express = require("express");
const RegisterController = require("../controllers/registerController");

const RegisterRoute = express.Router();

RegisterRoute.get("/", RegisterController.getRegister);

RegisterRoute.post("/", RegisterController.postRegister);

module.exports = RegisterRoute;
