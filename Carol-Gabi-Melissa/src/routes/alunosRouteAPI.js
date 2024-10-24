const express = require("express");
const AlunosController = require("../controllers/AlunosController");

const alunosRouteAPI = express.Router();

alunosRouteAPI.get("/", AlunosController.getAllAlunosAPI);

module.exports = alunosRouteAPI;
