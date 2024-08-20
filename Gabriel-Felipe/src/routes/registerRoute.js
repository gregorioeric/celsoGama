const express = require('express');
const RegisterController = require('../controllers/registerController');

const routeRegister = express.Router();

routeRegister.get('/',RegisterController.getRegister);

routeRegister.post('/', RegisterController.postRegister);

module.exports = routeRegister;