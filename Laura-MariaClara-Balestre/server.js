require("dotenv").config();
const express = require("express");
const path = require("path");
const database = require("./src/database/database");
const homeRoute = require("./src/routes/homeRoute");
const materiasRoute = require("./src/routes/materiasRoute");
const vestibularesRoute = require("./src/routes/vestibularesRoute");
const quemsomosRoute = require("./src/routes/quemsomosRoute");
const loginRegisterRoute = require("./src/routes/loginRegisterRoute");

const app = express();
const port = process.env.PORTSERVER || 3000;

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "./public")));

app.use("/", homeRoute);
app.use("/materias", materiasRoute);
app.use("/vestibulares", vestibularesRoute);
app.use("/quemSomos", quemsomosRoute);
app.use("/loginRegister", loginRegisterRoute);

app.listen(port, async () => {
  const [result] = await database.query("SELECT 1");
  if (result) {
    console.log(`http://localhost:${port}`);
  }
});

// const express = require("express");
// const route = require("./src/routes/route");
// const port = 5000;

// const app = express();

// app.set("view engine", "ejs");
// app.set("views", "./src/views");

// app.use(route);

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.listen(port, () => {
//   console.log(`http://localhost:${port}`);
// });
