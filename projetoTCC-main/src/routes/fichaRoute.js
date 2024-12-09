const express = require('express');
const fichaController = require('../controllers/fichaController');

const fichaRoute = express.Router();

fichaRoute.get('/', fichaController.getficha );

module.exports = fichaRoute;