const express = require('express');

const produtosRoute = express.Router();

produtosRoute.get("/produtos", (req, res) => {
    return res.render("produtos");
  });

module.exports = produtosRoute;
