const RegisterBookModel = require("../models/registerBooksModels");

module.exports = class CategoriesBooksController {
  static async getRomance(req, res) {
    const getAllBooks = await RegisterBookModel.selectAllBooks();
    const findCategoria = getAllBooks.filter(
      (categoria) => categoria.book_categoria === "Romance"
    );

    return res.render("romance", { romance: findCategoria });
  }

  static async getTerror(req, res) {
    const getAllBooks = await RegisterBookModel.selectAllBooks();
    const findCategoria = getAllBooks.filter(
      (categoria) => categoria.book_categoria === "Terror"
    );

    return res.render("terror", { terror: findCategoria });
  }

  static async getSuspense(req, res) {
    const getAllBooks = await RegisterBookModel.selectAllBooks();
    const findCategoria = getAllBooks.filter(
      (categoria) => categoria.book_categoria === "Suspense"
    );

    return res.render("suspense", { suspense: findCategoria });
  }

  static async getHQs(req, res) {
    const getAllBooks = await RegisterBookModel.selectAllBooks();
    const findCategoria = getAllBooks.filter(
      (categoria) => categoria.book_categoria === "HQs"
    );

    return res.render("hqs", { hqs: findCategoria });
  }

  static async getComedia(req, res) {
    const getAllBooks = await RegisterBookModel.selectAllBooks();
    const findCategoria = getAllBooks.filter(
      (categoria) => categoria.book_categoria === "Comedia"
    );

    return res.render("comedia", { comedia: findCategoria });
  }

  static async getCriminais(req, res) {
    const getAllBooks = await RegisterBookModel.selectAllBooks();
    const findCategoria = getAllBooks.filter(
      (categoria) => categoria.book_categoria === "Criminais"
    );

    return res.render("criminais", { criminais: findCategoria });
  }

  static async getFabulas(req, res) {
    const getAllBooks = await RegisterBookModel.selectAllBooks();
    const findCategoria = getAllBooks.filter(
      (categoria) => categoria.book_categoria === "Fabulas"
    );

    return res.render("fabulas", { fabulas: findCategoria });
  }

  static async getGibis(req, res) {
    const getAllBooks = await RegisterBookModel.selectAllBooks();
    const findCategoria = getAllBooks.filter(
      (categoria) => categoria.book_categoria === "Gibis"
    );

    return res.render("gibis", { gibis: findCategoria });
  }
};

// const findCategories = getAllBooks.map((item) => {
//   const categoreis = {
//     book_categoria: item.book_categoria,
//   };
//   return categoreis;
// });
