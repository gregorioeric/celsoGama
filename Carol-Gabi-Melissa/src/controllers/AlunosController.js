const AlunoModel = require("../models/alunoModel");

module.exports = class AlunosController {
  static async getAlunos(req, res) {
    return res.render("alunos", {
      msgError: req.query.msgError,
      msgSuccess: req.query.msgSuccess,
    });
  }

  static async postAluno(req, res) {
    const { aluno_name, aluno_email, aluno_serie } = req.body;

    if (!aluno_name || !aluno_email || !aluno_serie) {
      return res.redirect(
        "/alunos?msgError=Todos os campos precisam ser preenchidos!"
      );
    }

    const dataAluno = {
      aluno_name,
      aluno_email,
      aluno_serie,
    };

    const result = await AlunoModel.insertAluno(dataAluno);

    if (!result) {
      return res.redirect(
        "/alunos?msgError=Não foi possivel cadastrar o aluno!"
      );
    }

    return res.redirect("/alunos?msgSuccess=Aluno casdastrado com sucesso!");
  }

  static async getAllAlunosAPI(req, res) {
    const result = await AlunoModel.selectAllAluno();

    return res.json(result);
  }
};
