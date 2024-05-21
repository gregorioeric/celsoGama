class RegisterUserControllers {
  store(req, res) {
    const name = req.body;
    console.log("teste");
    console.log(name);
    res.send("user register");
  }
}
module.exports = RegisterUserControllers;
