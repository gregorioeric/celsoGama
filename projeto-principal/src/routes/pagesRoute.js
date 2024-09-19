const express = require("express");
const PagesController = require("../controllers/admin/pagesContoller");

const pagesRoute = express.Router();

pagesRoute.get("/", PagesController.getPages);

pagesRoute.post("/", PagesController.postPages);

module.exports = pagesRoute;
