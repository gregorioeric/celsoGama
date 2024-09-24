const RegisterBookModel = require("../models/registerBooksModels");

class RegisterBookController {
  static async getRegisterBook(req, res) {
    return res.render("registerBooks", {
      masgError: req.query.msgError,
      msgSuccess: req.query.msgSuccess,
    });
  }

  static async postBook(req, res) {
    const { book_name, book_autor, book_categoria, book_desc } = req.body;
    const book_date = new Date().toJSON().slice(0, 19).replace("T", " ");
    const book_image = req.file.filename;

    if (
      !book_name ||
      !book_autor ||
      !book_categoria ||
      !book_desc ||
      !book_image
    ) {
      return res.redirect(
        "/registerBooks?msgFields=Todos os campos o preenchimento é obrigatorio!"
      );
    }

    const book = {
      book_image,
      book_name,
      book_autor,
      book_categoria,
      book_desc,
      book_date,
    };

    const result = await RegisterBookModel.postBook(book);
    console.log(result);

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
