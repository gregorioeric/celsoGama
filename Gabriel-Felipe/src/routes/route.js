const express = require("express");
const AdminController = require("../controllers/admin/adminController");
const route = express.Router();

route.get("/", (req, res) => {
  return res.render("index");
});

// route.get("/contato", (req, res) => {
//   return res.render("contato");
// });

// route.get("/produtos", (req, res) => {
//   return res.render("produtos");
// });



module.exports = route;

