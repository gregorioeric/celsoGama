const express = require("express");
const BlogController = require("../controllers/blogController");

const blogRoute = express.Router();

blogRoute.get("/", BlogController.getblog);

module.exports = blogRoute;
