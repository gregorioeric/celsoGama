const express = require("express");
const MateriasController = require("../controllers/materiasController");
const AuthMiddleware = require("../middlewares/authMiddleware");

const materiasRoute = express.Router();

materiasRoute.get("/", AuthMiddleware.authorization, MateriasController.getMaterias);

materiasRoute.get("/educacao-fisica", AuthMiddleware.authorization, MateriasController.getMateriaEducacaoFisica);
materiasRoute.get("/tecnologias-da-informacao-e-comunicacao", AuthMiddleware.authorization, MateriasController.getMateriaTecnologiasdaInformacaoeComunicacao);
materiasRoute.get("/artes", AuthMiddleware.authorization, MateriasController.getMateriaArtes);
materiasRoute.get("/historia", AuthMiddleware.authorization, MateriasController.getMateriaHistoria);
materiasRoute.get("/geografia", AuthMiddleware.authorization, MateriasController.getMateriaGeografia);
materiasRoute.get("/filosofia", AuthMiddleware.authorization, MateriasController.getMateriaFilosofia);
materiasRoute.get("/sociologia", AuthMiddleware.authorization, MateriasController.getMateriaSociologia);
materiasRoute.get("/biologia", AuthMiddleware.authorization, MateriasController.getMateriaBiologia);
materiasRoute.get("/fisica", AuthMiddleware.authorization, MateriasController.getMateriaFisica);
materiasRoute.get("/quimica", AuthMiddleware.authorization, MateriasController.getMateriaQuimica);
materiasRoute.get("/portugues",AuthMiddleware.authorization, MateriasController.getMateriaPortugues);
materiasRoute.get("/espanhol", AuthMiddleware.authorization, MateriasController.getMateriaEspanhol);
materiasRoute.get("/ingles", AuthMiddleware.authorization, MateriasController.getMateriaIngles);
materiasRoute.get("/matematica", AuthMiddleware.authorization, MateriasController.getMateriaMatematica);

module.exports = materiasRoute;
