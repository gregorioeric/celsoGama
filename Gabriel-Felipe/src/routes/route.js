const express = require("express");

const route = express.Router();

route.get("/", (req, res) => {
  return res.render("login");
});

// route.get("/contato", (req, res) => {
//   return res.render("contato");
// });

// route.get("/produtos", (req, res) => {
//   return res.render("produtos");
// });

// route.get("/login", LoginUserControllers.getLogin);

// route.post("/login", LoginUserControllers.postLogin);

module.exports = route;
