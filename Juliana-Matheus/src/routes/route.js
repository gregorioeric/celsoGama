const express = require("express");
const RegisterUserController = require("../controllers/registerUserController");

const registerUser = new RegisterUserController();

const route = express.Router();

route.get("/", (req, res) => {
  res.render("blog");
});

module.exports = route;
