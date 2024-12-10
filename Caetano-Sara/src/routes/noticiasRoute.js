const express = require('express');

const noticiasRoute = express.Router();

noticiasRoute.get("/", (req, res) => {
    return res.render("noticias");
  });

module.exports = noticiasRoute;