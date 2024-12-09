const express = require("express");
const AdminController = require("../../controllers/admin/adminController");

const adminRoute = express.Router();

adminRoute.get("/admin", AdminController.getAdmin);

module.exports = adminRoute;
