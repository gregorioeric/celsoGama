const express = require("express");
const LogoutAdminController = require("../controllers/logoutAdminController");
const LogoutAdminRoute = express.Router();
LogoutAdminRoute.get("/", LogoutAdminController.LogoutAdmin);
module.exports = LogoutAdminRoute;
