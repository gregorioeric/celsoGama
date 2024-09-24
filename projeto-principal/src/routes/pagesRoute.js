const express = require("express");
const PagesController = require("../controllers/admin/pagesContoller");
const CreatePagesController = require("../controllers/admin/createPagesController");
const EditPageController = require("../controllers/admin/editPageController");

const pagesRoute = express.Router();

pagesRoute.get("/", PagesController.getPages);

// pagesRoute.post("/", PagesController.postPages);

pagesRoute.get("/createPages", CreatePagesController.getCreatePages);

pagesRoute.post("/createPages", CreatePagesController.postCreatePages);

pagesRoute.get("/editPage/:id", EditPageController.getEditPage);

pagesRoute.post("/editPage/:id", EditPageController.putEditPage);

pagesRoute.post("/deletePage/:id", PagesController.deletePage);

module.exports = pagesRoute;
