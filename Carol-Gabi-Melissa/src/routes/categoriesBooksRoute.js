const express = require("express");
const CategoriesBooksController = require("../controllers/categoriesBooksController");

const categoriesRoute = express.Router();

categoriesRoute.get("/romance", CategoriesBooksController.getRomance);
categoriesRoute.get("/terror", CategoriesBooksController.getTerror);
categoriesRoute.get("/suspense", CategoriesBooksController.getSuspense);
categoriesRoute.get("/hqs", CategoriesBooksController.getHQs);
categoriesRoute.get("/comedia", CategoriesBooksController.getComedia);
categoriesRoute.get("/criminais", CategoriesBooksController.getCriminais);
categoriesRoute.get("/fabulas", CategoriesBooksController.getFabulas);
categoriesRoute.get("/gibis", CategoriesBooksController.getGibis);

module.exports = categoriesRoute;
