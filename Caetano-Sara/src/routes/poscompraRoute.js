const express = require('express');
const poscompraController= require('../controllers/poscompraController');

const poscompraRoute = express.Router();

poscompraRoute.get('/', poscompraController.getposcompra );

module.exports = poscompraRoute;