class RegisterUserControllers {
  getRegister(req, res) {
    return res.render("register", {
      msgFieldsEmpty: "",
      msgNameError: "",
    });
  }

  store(req, res) {
    const { ...data_user } = req.body;

    if (data_user.user_name < 3) {
      return res.render("register", {
        msgNameError: "Nome precisa ter no minino 3 caracteres!",
        msgFieldsEmpty: "",
      });
    }

    if (
      !data_user.user_name ||
      !data_user.user_email ||
      !data_user.user_password ||
      !data_user.userConfirmPassword
    ) {
      return res.render("register", {
        msgFieldsEmpty: "Os campos não podem ser vazios!",
        msgNameError: "",
      });
    }

    if (data_user.user_password !== data_user.userConfirmPassword) {
      return res.send("Senhas não são iguais!");
    }

    console.log(data_user);
    return res.send("user register");
  }
}
module.exports = RegisterUserControllers;
