const RegisterUserModel = require("../models/registerUserModels");

class RegisterUserController {
  static getRegister(req, res) {
    return res.render("register", {
      msg: "",
    });
  }

  static async store(req, res) {
    
    return res.send("user register");
  }
}

module.exports = RegisterUserController;
