const mysql = require("mysql2");

const database = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "C3lS0g$ma52#94Ws$",
  database: "login_register_system",
});

module.exports = database;
