const express = require("express");

const contatoRoute = express.Router();

contatoRoute.get("/", (req, res) => {
  return res.render("contato");
});

module.exports = contatoRoute;
