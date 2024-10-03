const RegisterBookModel = require("../models/registerBooksModels");

class RegisterBookController {
  static async getRegisterBook(req, res) {
    return res.render("registerBooks", {
      msgError: req.query.msgError,
      msgSuccess: req.query.msgSuccess,
    });
  }

  static async postBook(req, res) {
    const { book_name, book_autor, book_categoria, book_desc } = req.body;

    if (!book_name || !book_autor || !book_categoria || !book_desc) {
      return res.redirect(
        "/registerBooks?msgError=Todos os campos o preenchimento é obrigatorio!"
      );
    }

    const book_image = req.file.filename;

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
}

module.exports = RegisterBookController;
