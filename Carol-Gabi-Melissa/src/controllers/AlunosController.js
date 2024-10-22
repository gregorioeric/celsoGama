module.exports = class AlunosController {
  static async getAlunos(req, res) {
    return res.render("alunos", {
      msgError: req.query.msgError,
      msgSuccess: req.query.msgSuccess,
    });
  }

  static async postAluno(req, res) {
    const { ...aluno } = req.body;
    let code_num = 1000;

    const generateId = () => {
      code_num++;
      const id = `A${code_num}`;

      return id;
    };

    const dataAluno = {
      aluno_name: aluno.aluno_name,
      aluno_email: aluno.aluno_email,
      aluno_code: generateId(),
      aluno_serie: aluno.aluno_serie,
      aluno_celular: aluno.aluno_celular,
    };

    console.log(dataAluno);

    return res.redirect(
      "/alunos?msgSuccess=Emprestimo casdastrado com sucesso!"
    );
  }
};
