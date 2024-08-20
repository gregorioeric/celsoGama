require("dotenv").config();
const express = require("express");
const route = require("./src/routes/route");
const path = require("path");
const database = require("./src/database/database");
const adminRoute = require("./src/routes/adminRoute");
const dashboardRoute = require("./src/routes/dashboardRoute");
const dicasRoute = require("./src/routes/dicasroute");
const quemsomosRoute = require("./src/routes/quemsomosRoute");
database;

const app = express();
const port = process.env.PORTSERVER || 3000;

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "./public")));

app.use("/", route);
app.use("/admin", adminRoute);
app.use("/dashboard", dashboardRoute);
app.use("/dicas", dicasRoute);
app.use("/quemsomos", quemsomosRoute);

database.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Conectado no banco de dados!");
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  }
});
