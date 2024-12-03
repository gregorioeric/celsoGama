const express = require("express");
const ContatoController = require("../controllers/contatoController");

const contatoRoute = express.Router();

contatoRoute.get("/", ContatoController.getContato);

module.exports = contatoRoute;
