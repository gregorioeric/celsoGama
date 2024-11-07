const database = require("../database/database");

module.exports = class RegisterBookModel {
  static async selectAllBooks() {
    const selectAllBooks = "SELECT * FROM books;";
    const [result] = await database.query(selectAllBooks);
    return result;
  }

  static async selectBookById(book_id) {
    const selectBookById = "SELECT * FROM books WHERE book_id = ?;";
    const [[result]] = await database.query(selectBookById, [book_id]);
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

  static async updateBook(book, book_id) {
    const { book_image, book_name, book_autor, book_categoria, book_desc } =
      book;
    const updateBook = `UPDATE books SET 
        book_image = ?,
        book_name = ?,
        book_autor = ?,
        book_categoria = ?,
        book_desc = ?
      WHERE
        book_id = ?;`;
    const [result] = await database.query(updateBook, [
      book_image,
      book_name,
      book_autor,
      book_categoria,
      book_desc,
      book_id,
    ]);
    return result;
  }

  static async deleteBook(book_id) {
    const deleteBook = "DELETE FROM books WHERE book_id = ?;";
    const [result] = await database.query(deleteBook, [book_id]);
    return result;
  }
};
