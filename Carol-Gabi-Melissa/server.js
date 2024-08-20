require("dotenv").config();
const express = require("express");
const path = require("path");
const database = require("./src/database/database");
const dashboardRoute = require("./src/routes/dashboardRoute");
const adminRoute = require("./src/routes/adminRoute");
const loginRoute = require("./src/routes/loginRoute");
const registerRoute = require("./src/routes/registerRoutes");
const homeRoute = require("./src/routes/homeRoute");

const app = express();
const port = process.env.PORTSERVER || 3000;

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "./public")));

app.use("/", adminRoute);
app.use("/home", homeRoute);
app.use("/dashboard", dashboardRoute);
app.use("/login", loginRoute);
app.use("/register", registerRoute);

database.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("conectado no banco de dados!");
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  }
});
