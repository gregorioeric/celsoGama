const express = require("express");
const RegisterController = require("../controllers/registerController");

const loginRegisterRoute = express.Router();

loginRegisterRoute.get('/', RegisterController.getRegister);

loginRegisterRoute.post('/login', RegisterController.postLogin);
loginRegisterRoute.post('/register', RegisterController.postRegister);

module.exports = loginRegisterRoute;