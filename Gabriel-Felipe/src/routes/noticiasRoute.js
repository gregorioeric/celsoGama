const express = require("express");
const NoticiasController = require("../controllers/noticiasController");

const noticiasRoute = express.Router();

noticiasRoute.get("/", NoticiasController.getNoticias);

module.exports = noticiasRoute;
