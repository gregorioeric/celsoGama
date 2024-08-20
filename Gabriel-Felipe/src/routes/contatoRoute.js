const express = require('express');

const contatoRoute = express.Router();

contatoRoute.get("/contato", (req, res) => {
    return res.render("contato");
  });

module.exports = contatoRoute;