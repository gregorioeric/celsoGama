const express = require("express");
const RegisterUserController = require("../controllers/registerUserController");
const LoginUserControllers = require("../controllers/loginUserController");
const AdminController = require("../controllers/admin/adminController");
const route = express.Router();

route.get("/", (req, res) => {
  return res.render("index");
});

route.get("/contato", (req, res) => {
  return res.render("contato");
});

route.get("/produtos", (req, res) => {
  return res.render("produtos");
});

route.get("/login", LoginUserControllers.getLogin);

route.post("/login", LoginUserControllers.postLogin);

route.get('/admin', AdminController.getAdmin); 

module.exports = route;
