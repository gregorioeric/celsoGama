const express = require("express");
const HomeController = require("../controllers/homeController");
const AuthAdminMiddleware = require("../middlewares/authAdminMiddleware");

const homeRoute = express.Router();

homeRoute.get(
  "/",
  AuthAdminMiddleware.adminAuthorization,
  HomeController.getHome
);

module.exports = homeRoute;
