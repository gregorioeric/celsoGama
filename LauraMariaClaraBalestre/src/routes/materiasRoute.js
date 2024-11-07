const express = require("express");
const MateriasController = require("../controllers/materiasController");
const AuthMiddleware = require("../middlewares/authMiddleware");

const materiasRoute = express.Router();

materiasRoute.get(
  "/",
  AuthMiddleware.authorization,
  MateriasController.getMaterias
);

materiasRoute.get(
  "/educacao-fisica",
  AuthMiddleware.authorization,
  MateriasController.getMateriaEducacaoFisica
);
materiasRoute.get(
  "/tecnologia-e-inovacao",
  AuthMiddleware.authorization,
  MateriasController.getMateriaTecnologiaeInovacao
);
materiasRoute.get(
  "/artes",
  AuthMiddleware.authorization,
  MateriasController.getMateriaArtes
);
materiasRoute.get(
  "/ciencias-humanas",
  AuthMiddleware.authorization,
  MateriasController.getMateriaCienciasHumanas
);
materiasRoute.get(
  "/ciencias-da-natureza",
  AuthMiddleware.authorization,
  MateriasController.getMateriaCienciasdaNatureza
);
materiasRoute.get(
  "/fisica",
  AuthMiddleware.authorization,
  MateriasController.getMateriaFisica
);
materiasRoute.get(
  "/quimica",
  AuthMiddleware.authorization,
  MateriasController.getMateriaQuimica
);
materiasRoute.get(
  "/portugues",
  AuthMiddleware.authorization,
  MateriasController.getMateriaPortugues
);
materiasRoute.get(
  "/espanhol",
  AuthMiddleware.authorization,
  MateriasController.getMateriaEspanhol
);
materiasRoute.get(
  "/ingles",
  AuthMiddleware.authorization,
  MateriasController.getMateriaIngles
);
materiasRoute.get(
  "/matematica",
  AuthMiddleware.authorization,
  MateriasController.getMateriaMatematica
);

module.exports = materiasRoute;
