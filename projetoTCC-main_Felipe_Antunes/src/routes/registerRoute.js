const express = require('express');
const RegisterController = require('../controllers/registerController');
const RegisterUserMiddleware = require('../middlewares/registerUserMiddleware');

const routeRegister = express.Router();

routeRegister.get('/',RegisterController.getRegister);

routeRegister.post('/', RegisterUserMiddleware.verifyFields, RegisterController.postRegister);

module.exports = routeRegister;