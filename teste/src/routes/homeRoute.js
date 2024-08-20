const express = require("express");

const homeRoute = express.Router();

homeRoute.get("/", (req, res) => {
  return res.render("index");
});

// route.get("/produtos", (req, res) => {
//   return res.render("produtos");
// });

// route.get("/loginRegister", LoginUsesrControllers.getLoginRegister);
// route.get("/loginRegister", RegisterUserController.getRegisterLogin);

// route.get("/register", RegisterUserController.getRegister);

// route.post("/loginRegister", RegisterUserController.store);
// route.post("/login", LoginUsesrControllers.postLogin);

module.exports = homeRoute;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
// const express = require("express");

// const route = express.Router();

// route.get("/", (req, res) => {
//   res.render("index");
// });

// route.get("/contato", (req, res) => {
//   res.render("contato");
// });

// module.exports = route;
