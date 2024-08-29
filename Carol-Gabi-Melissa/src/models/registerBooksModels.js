const database = require("../database/database");

module.exports = class RegisterModel {
  static async getAllBooks() {
    const selectAllBooks = "SELECT * FROM books;";
    const [[result]] = await database.query(selectAllBooks);
    return result;
  }

  static async postBook(book) {
    const {
      book_image,
      book_name,
      book_autor,
      book_categoria,
      book_desc,
      book_date,
    } = book;
    const insertBook = `INSERT INTO books (book_image, book_name, book_autor, book_categoria, book_desc, book_date ) VALUES (?, ?, ?, ?, ?)`;
    const [result] = await database.query(insertBook, [
      book_image,
      book_name,
      book_autor,
      book_categoria,
      book_desc,
      book_date,
    ]);
    return result;
  }
};
