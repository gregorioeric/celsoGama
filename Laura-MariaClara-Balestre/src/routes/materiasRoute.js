const express = require("express");
const MateriasController = require("../controllers/materiasController");

const materiasRoute = express.Router();

materiasRoute.get("/", MateriasController.getMaterias);

materiasRoute.get("/educacao-fisica", MateriasController.getMaterias);

module.exports = materiasRoute;
