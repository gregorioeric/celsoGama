const express = require("express");

const route = express.Router();

route.get("/", (req, res) => {
  res.render("index");
});

route.get("/contato", (req, res) => {
  res.render("contato");
});

route.get("/produtos", (req, res) => {
  res.render("produtos");
});

route.get("/login", (req, res) => {
  res.render("login");
});

route.get("/register", (req, res) => {
  res.render("register");
});

route.post("/register", (req, res) => {
  res.render("register");
});

module.exports = route;

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
