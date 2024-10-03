const database = require("../database/database");

module.exports = class RegisterBookModel {
  static async selectAllBooks() {
    const selectAllBooks = "SELECT * FROM books;";
    const [result] = await database.query(selectAllBooks);
    return result;
  }

  static async insertBook(book) {
    const { book_image, book_name, book_autor, book_categoria, book_desc } =
      book;
    const insertBook = `INSERT INTO books (book_image, book_name, book_autor, book_categoria, book_desc ) VALUES (?, ?, ?, ?, ?);`;
    const [result] = await database.query(insertBook, [
      book_image,
      book_name,
      book_autor,
      book_categoria,
      book_desc,
    ]);
    return result;
  }
};
