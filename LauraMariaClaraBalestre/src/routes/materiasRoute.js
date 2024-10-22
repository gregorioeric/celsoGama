const express = require("express");
const MateriasController = require("../controllers/materiasController");

const materiasRoute = express.Router();

materiasRoute.get("/", MateriasController.getMaterias);

materiasRoute.get("/educacao-fisica", MateriasController.getMateriaEducacaoFisica);
materiasRoute.get("/tecnologia-e-inovacao", MateriasController.getMateriaTecnologiaeInovacao);
materiasRoute.get("/artes", MateriasController.getMateriaArtes);
materiasRoute.get("/ciencias-humanas", MateriasController.getMateriaCienciasHumanas);
materiasRoute.get("/ciencias-da-natureza", MateriasController.getMateriaCienciasdaNatureza);
materiasRoute.get("/fisica", MateriasController.getMateriaFisica);
materiasRoute.get("/quimica", MateriasController.getMateriaQuimica);
materiasRoute.get("/portugues", MateriasController.getMateriaPortugues);
materiasRoute.get("/espanhol", MateriasController.getMateriaEspanhol);
materiasRoute.get("/ingles", MateriasController.getMateriaIngles);
materiasRoute.get("/matematica", MateriasController.getMateriaMatematica);

module.exports = materiasRoute;
