const express = require("express");
const AlunosController = require("../controllers/AlunosController");

const alunosRoute = express.Router();

alunosRoute.get("/", AlunosController.getAlunos);

alunosRoute.post("/", AlunosController.postAluno);

alunosRoute.get("/editAluno/:id", AlunosController.getEditAlunos);

alunosRoute.post("/updateAluno/:id", AlunosController.updateAluno);

alunosRoute.post("/deleteAluno/:id", AlunosController.deleteAluno);

module.exports = alunosRoute;
