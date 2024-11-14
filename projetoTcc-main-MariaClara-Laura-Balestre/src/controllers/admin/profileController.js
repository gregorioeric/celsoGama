class ProfileController {
  static async getProfile(req, res) {
    const userLogged = req.session.user;

    return res.render("profile", {
      userLogged,
      msgError: req.query.msgError,
      msgSuccess: req.query.msgSuccess,
    });
  }

  static async postProfile(req, res) {
    const { ...data } = req.body;
    console.log(data);

    return res.redirect("/profile?msgSuccess=Perfil atualizado com sucesso!");
  }
}

module.exports = ProfileController;
