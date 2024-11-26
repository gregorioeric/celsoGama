const RegisterUserModel = require("../../models/registerUserModels");

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
    const getId = Number(req.params.id);

    if (!data.user_name || !data.user_email) {
      return res.redirect(
        "/profile?msgError=Campos Nome e Email precisam ser preenchidos!"
      );
    }

    const updateUser = {
      user_name: data.user_name,
      user_email: data.user_email,
      user_cep: data.user_cep,
      user_genero: data.user_genero,
      user_idade: data.user_idade,
      user_escolaridade: data.user_escolaridade,
      user_curso_interesse: data.user_curso_interesse,
    };

    const result = await RegisterUserModel.updateUser(getId, updateUser);

    if (!result) {
      return res.redirect(
        "/profile?msgError=Não foi possivel atualizar o perfil do usuario!"
      );
    }

    const checkExists = await RegisterUserModel.getUserById(getId);
    req.session.logged = true;
    req.session.user = checkExists;

    return res.redirect("/profile?msgSuccess=Perfil atualizado com sucesso!");
  }
}

module.exports = ProfileController;
