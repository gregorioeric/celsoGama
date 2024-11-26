const express = require("express");
const ProfileController = require("../controllers/admin/profileController");

const profileRoute = express.Router();

profileRoute.get("/", ProfileController.getProfile);

profileRoute.post("/:id", ProfileController.postProfile);

module.exports = profileRoute;
