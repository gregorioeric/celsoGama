const express = require("express");
const LoginRegisterController = require("../controllers/loginRegisterController");

const loginRegisterRoute = express.Router();

loginRegisterRoute.get('/', LoginRegisterController.getRegister);

loginRegisterRoute.post('/login', LoginRegisterController.postLogin);
loginRegisterRoute.post('/register', LoginRegisterController.postRegister);

module.exports = loginRegisterRoute;