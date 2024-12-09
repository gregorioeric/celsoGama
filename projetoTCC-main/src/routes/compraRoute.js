const express = require('express');
const compraController = require('../controllers/compraController');

const compraRoute = express.Router();

compraRoute.get('/', compraController.getcompra );

module.exports = compraRoute;