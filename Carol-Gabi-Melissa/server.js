require("dotenv").config();
const express = require("express");
const path = require("path");
const database = require("./src/database/database");
const dashboardRoute = require("./src/routes/dashboardRoute");
const adminRoute = require("./src/routes/adminRoute");
const loginRoute = require("./src/routes/loginRoute");
const registerRoute = require("./src/routes/registerRoutes");
const homeRoute = require("./src/routes/homeRoute");
const registerBookRoute = require("./src/routes/registerRoutes");

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
app.use("/registerBooks", registerBookRoute);

app.listen(port, async () => {
  const [result] = await database.query("SELECT 1");
  if (result) {
    console.log(`http://localhost:${port}`);
  }
});
