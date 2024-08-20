const express = require("express");
const DicasController = require("../controllers/dicasController");

const dicasRoute = express.Router();

dicasRoute.get("/", DicasController.getdicas);

module.exports = dicasRoute;
