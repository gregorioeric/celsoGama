const AlunoModel = require("../models/alunoModel");
const LoanBooksModel = require("../models/loanBooksModel");

module.exports = class AlunosController {
  static async getAlunos(req, res) {
    const results = await AlunoModel.selectAllAluno();
    return res.render("alunos", {
      msgError: req.query.msgError,
      msgSuccess: req.query.msgSuccess,
      alunos: results,
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

  static async getEditAlunos(req, res) {
    const getId = req.params.id;
    const result = await AlunoModel.selectAlunoById(getId);
    return res.render("editAluno", {
      msgError: req.query.msgError,
      msgSuccess: req.query.msgSuccess,
      aluno: result,
    });
  }

  static async updateAluno(req, res) {
    const getId = req.params.id;
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

    const result = await AlunoModel.updateAluno(getId, dataAluno);

    if (!result) {
      return res.redirect(
        "/alunos?msgError=Não foi possivel cadastrar o aluno!"
      );
    }

    return res.redirect(
      "/alunos?msgSuccess=Dados do(a) Aluno(a) atualizado com sucesso!"
    );
  }

  static async deleteAluno(req, res) {
    const getId = req.params.id;
    const getAluno = await AlunoModel.selectAlunoById(getId);
    const getLoan = await LoanBooksModel.SelectJoinEmprestimoBooksAlunos();

    const findLoan = getLoan.filter(
      (item) => item.loan_id === getAluno.aluno_id
    );

    if (findLoan.length !== 0) {
      return res.redirect(
        `/alunos?msgError=Não foi possivel deletar o(a) 
        Aluno(a) ${getAluno.aluno_name}, porque esse Aluno está com o  
        Livro ${findLoan[0].book_name} emprestado! Para deletar esse aluno, 
        você precisa acessar o Emprestimo de Livros localizar o aluno vinculado 
        ao Livro e desvincular o aluno ao livro. Mas as de desvincular
        o aluno, você precisa garantir que o Aluno relamente não está 
        com o Livro emprestado!`
      );
    }

    const result = await AlunoModel.deleteAluno(getId);

    if (!result) {
      return res.redirect(
        "/alunos?msgError=Não foi possivel cadastrar o aluno!"
      );
    }

    return res.redirect(
      "/alunos?msgSuccess=Cadastro do(a) Aluno(a) foi deletado com sucesso!"
    );
  }
};
