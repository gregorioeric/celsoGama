const express = require('express');
const LogoutAdminController = require('../controllers/logoutAdminController');

const logoutAdminRoute = express.Router();

logoutAdminRoute.use('/', LogoutAdminController.logoutAdmin);

module.exports = logoutAdminRoute;