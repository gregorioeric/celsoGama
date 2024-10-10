module.exports = class AlunosController {
  static async getAlunos(req, res) {
    return res.render("alunos", {
      msgError: req.query.msgError,
      msgSuccess: req.query.msgSuccess,
    });
  }

  static async postAluno(req, res) {
    return res.redirect(
      "/alunos?msgSuccess=Emprestimo casdastrado com sucesso!"
    );
  }
};
