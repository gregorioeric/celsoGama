class RegisterUserControllers {
  getRegister(req, res) {
    return res.render("register", {
      msgFieldsEmpty: "",
      msgNameError: "",
      msgPassError: "",
      msgEmailError: "",
    });
  }

  store(req, res) {
    const { ...data_user } = req.body;

    const regex_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regex_senha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$#@%*&!?])/;

    const regex_maiuscula = /^(?=.*[A-Z])/;
    const regex_minuscula = /^(?=.*[a-z])/;
    const regex_numero = /^(?=.*[0-9])/;
    const regex_caracter_especial = /^(?=.*[$#@%*&!?])/;

    if (
      !data_user.user_name ||
      !data_user.user_email ||
      !data_user.user_password ||
      !data_user.userConfirmPassword
    ) {
      return res.render("register", {
        msgFieldsEmpty: "Os campos não podem ser vazios!",
        msgNameError: "",
        msgPassError: "",
        msgEmailError: "",
      });
    }

    if (data_user.user_name.length < 3) {
      return res.render("register", {
        msgNameError: "Nome precisa ter no minino 3 caracteres!",
        msgFieldsEmpty: "",
        msgPassError: "",
        msgEmailError: "",
      });
    }

    if (!regex_email.test(data_user.user_email)) {
      return res.render("register", {
        msgEmailError: "Digite um email valido!",
        msgNameError: "",
        msgFieldsEmpty: "",
        msgPassError: "",
      });
    }

    if (data_user.user_password !== data_user.userConfirmPassword) {
      return res.render("register", {
        msgPassError: "Senha não são iguais",
        msgNameError: "",
        msgFieldsEmpty: "",
        msgEmailError: "",
      });
    }

    console.log(data_user);
    return res.send("user register");
  }
}
module.exports = RegisterUserControllers;
