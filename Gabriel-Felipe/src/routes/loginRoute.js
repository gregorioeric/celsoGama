const express = require("express");
const LoginController = require("../controllers/loginController");

const loginRoute = express.Router();

loginRoute.get("/", LoginController.getlogin);

loginRoute.post("/", LoginController.postlogin);

module.exports = loginRoute;
