const express = require("express");
const ProfileController = require("../controllers/admin/profileController");

const profileRoute = express.Router();

profileRoute.get("/", ProfileController.getProfile);

profileRoute.post("/", ProfileController.postProfile);

module.exports = profileRoute;
