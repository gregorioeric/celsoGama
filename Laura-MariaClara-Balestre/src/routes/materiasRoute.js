const express = require("express");
const MateriasController = require("../controllers/materiasController");

const materiasRoute = express.Router();

materiasRoute.get("/", MateriasController.getMaterias);

materiasRoute.get(
  "/educacao-fisica",
  MateriasController.getMateriaEducacaoFisica
);

materiasRoute.get(
  "/tecnologias-e-inovacao",
  MateriasController.getMateriaTecnologia
);

materiasRoute.get("/artes", MateriasController.getMateriaArtes);

materiasRoute.get(
  "/ciencias-humanas",
  MateriasController.getMateriaCienciasHumanas
);

materiasRoute.get(
  "/ciencias-da-natureza",
  MateriasController.getMateriaCienciasNatureza
);

materiasRoute.get("/fisica", MateriasController.getMateriaFisica);

materiasRoute.get("/quimica", MateriasController.getMateriaQuimica);

materiasRoute.get("/portugues", MateriasController.getMateriaPortugues);

materiasRoute.get("/espanhol", MateriasController.getMateriaEspanhol);

materiasRoute.get("/ingles", MateriasController.getMateriaIngles);

materiasRoute.get("/matematica", MateriasController.getMateriaMatematica);

module.exports = materiasRoute;
