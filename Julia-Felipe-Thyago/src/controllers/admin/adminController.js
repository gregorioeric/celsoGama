const jwt = require("jsonwebtoken");
const AdminModel = require("../../models/adminModel");

class AdminCotroller {
  static async getAdmin(req, res) {
    const msgSuccess = req.query.msgSuccess;
    const msgError = req.query.msgError;

    return res.render("admin", {
      msgSuccess,
      msgError,
    });
  }

  static async postAdmin(req, res) {
    const { admin_email, admin_password } = req.body;
    const result = await AdminModel.selectAdminByEmail(admin_email);

    if (!admin_email || !admin_password) {
      return res.redirect("/admin?msgError= Campos precisam preenchidos!");
    }

    if (!result) {
      return res.redirect(
        "/admin?msgError= Esse Email não esta cadastrado, por gentileza procurar o admin do sistema!"
      );
    }
    if (admin_password !== result.admin_password) {
      return res.redirect("/admin?msgError=A senha não são iguais");
    }

    const tokenAdmin = jwt.sign({ admin: result }, process.env.SECRET, {
      expiresIn: 24 * 60 * 60 * 1000,
    });

    res.cookie("tokenAdmin", tokenAdmin, {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    req.session.logged = true;
    req.session.adminUser = result;

    return res.redirect("/dashboard?msgSuccess=Login realizado com sucesso!");
  }
}

module.exports = AdminCotroller;
