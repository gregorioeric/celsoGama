const fs = require("fs");
const path = require("path");
const RegisterBookModel = require("../models/registerBooksModels");
const LoanBooksModel = require("../models/loanBooksModel");

class RegisterBookController {
  static async getRegisterBook(req, res) {
    const results = await RegisterBookModel.selectAllBooks();
    return res.render("registerBooks", {
      msgError: req.query.msgError,
      msgSuccess: req.query.msgSuccess,
      books: results,
    });
  }

  static async postBook(req, res) {
    const { book_name, book_autor, book_categoria, book_desc } = req.body;

    if (!book_name || !book_autor || !book_categoria || !book_desc) {
      return res.redirect(
        "/registerBooks?msgError=Todos os campos o preenchimento é obrigatorio!"
      );
    }

    const book_slug = book_name.replace(/\s+/g, "-");

    const book_image = `/${req.file.filename}`;

    if (!book_image) {
      return res.redirect(
        "/registerBooks?msgError=Precisa selecionar uma imagem para cadastrar o livro!"
      );
    }

    const book = {
      book_image,
      book_name,
      book_autor,
      book_categoria,
      book_desc,
      book_slug,
    };

    const result = await RegisterBookModel.insertBook(book);

    if (!result) {
      return res.redirect(
        "/registerBooks?msgError=Não foi possivel realizar o cadastro do livro!"
      );
    }

    return res.redirect(
      "/registerBooks?msgSuccess=Livro Cadastrado com Susseco!"
    );
  }

  static async getAllBooksAPI(req, res) {
    const results = await RegisterBookModel.selectAllBooks();

    return res.json(results);
  }

  static async getEditBook(req, res) {
    const getParams = req.params.id;
    const result = await RegisterBookModel.selectBookById(getParams);

    return res.render("editBook", {
      msgError: req.query.msgError,
      msgSuccess: req.query.msgSuccess,
      book: result,
    });
  }

  static async postUpdateBook(req, res) {
    const { book_name, book_autor, book_categoria, book_desc } = req.body;
    const getParams = req.params.id;

    if (!book_name || !book_autor || !book_categoria || !book_desc) {
      return res.redirect(
        `/registerBooks/editBook/${getParams}?msgError=Todos os campos o preenchimento é obrigatorio!`
      );
    }
    const book_slug = book_name.replace(/\s+/g, "-");
    let book_image;

    if (req.file) {
      book_image = `/${req.file.filename}`;
    } else {
      book_image = req.body.book_image;
    }

    const book = {
      book_image,
      book_name,
      book_autor,
      book_categoria,
      book_desc,
      book_slug,
    };

    const result = await RegisterBookModel.updateBook(book, getParams);
    return res.redirect("/registerBooks?msgSuccess=Atualizado com sucesso!");
  }

  static async postDeleteBook(req, res) {
    const getParams = req.params.id;
    const resultFilePath = await RegisterBookModel.selectBookById(getParams);
    const getLoan = await LoanBooksModel.SelectJoinEmprestimoBooksAlunos();

    const findLoan = getLoan.filter(
      (item) => item.loan_id === resultFilePath.book_id
    );

    if (findLoan.length !== 0) {
      return res.redirect(
        `/registerBooks?msgError=Não foi possivel deletar o 
        Livro ${resultFilePath.book_name}, porque está emprestado para o 
        aluno ${findLoan[0].aluno_name}. Para deletar este Livro você precisa desvincular 
        o Livro do Aluno, para isso acesse o Emprestimo de livros e localize 
        o Livro vinculado ao Aluno e delete o emprestimo de o Livro já foi devolvido!`
      );
    }

    const deleteImage =
      path.join("public", "uploads") + resultFilePath.book_image;

    const result = await RegisterBookModel.deleteBook(getParams);

    if (!result) {
      return res.redirect(
        "/registerBooks?msgError=Não foi possivel deletar o Livro!"
      );
    }

    fs.unlink(deleteImage, (error) => {
      if (error) {
        throw error;
      } else {
        console.log("img deleted");
      }
    });

    return res.redirect("/registerBooks?msgSuccess=Deletado com sucesso!");
  }

  static async deleteBookBySlug(req, res) {
    const getParams = req.params.id;
    const resultFilePath = await RegisterBookModel.selectBookById(getParams);
    const getLoan = await LoanBooksModel.SelectJoinEmprestimoBooksAlunos();

    const findLoan = getLoan.filter(
      (item) => item.loan_id === resultFilePath.book_id
    );

    if (findLoan.length !== 0) {
      return res.redirect(
        `/book/${resultFilePath.book_slug}?msgError=Não foi possivel deletar o 
        Livro ${resultFilePath.book_name}, porque está emprestado para o 
        aluno ${findLoan[0].aluno_name}. Para deletar este Livro você precisa desvincular 
        o Livro do Aluno, para isso acesse o Emprestimo de livros e localize 
        o Livro vinculado ao Aluno e delete o emprestimo de o Livro já foi devolvido!`
      );
    }

    const deleteImage =
      path.join("public", "uploads") + resultFilePath.book_image;

    const result = await RegisterBookModel.deleteBook(getParams);

    if (!result) {
      return res.redirect(
        "/registerBooks?msgError=Não foi possivel deletar o Livro!"
      );
    }

    fs.unlink(deleteImage, (error) => {
      if (error) {
        throw error;
      } else {
        console.log("img deleted");
      }
    });

    return res.redirect("/registerBooks?msgSuccess=Deletado com sucesso!");
  }
}

module.exports = RegisterBookController;
