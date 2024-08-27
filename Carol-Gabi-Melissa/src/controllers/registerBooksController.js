class RegisterBookController {
  static async getRegisterBook(req, res) {
    const msgFile = req.query.msgFile;
    const msgName = req.query.msgName;
    const msgCategoria = req.query.msgCategoria;
    const msgDesc = req.query.msgDesc;
    const msgSuccess = req.query.msgSuccess;
    return res.render("registerBooks", {
      msgFile,
      msgName,
      msgCategoria,
      msgDesc,
      msgSuccess,
    });
  }

  static async postBook(req, res) {
    const { book_name, book_categoria, book_desc } = req.body;
    const bookImg = req.file;

    console.log(req.body);

    return res.redirect(
      "/registerBooks?msgSuccess=Livro Cadastrado com Susseco!"
    );
  }
}

module.exports = RegisterBookController;
