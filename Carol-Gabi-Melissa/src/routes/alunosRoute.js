const express = require("express");
const AlunosController = require("../controllers/AlunosController");

const alunosRoute = express.Router();

alunosRoute.get("/", AlunosController.getAlunos);

alunosRoute.post("/", AlunosController.postAluno);

module.exports = alunosRoute;
