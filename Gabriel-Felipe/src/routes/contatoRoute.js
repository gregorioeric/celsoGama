const express = require('express');
const fichaController = require('../controllers/contatoController');
const ContatoController = require('../controllers/contatoController');

const contatoRoute = express.Router();

contatoRoute.get('/', ContatoController.getcontato );

module.exports = contatoRoute;