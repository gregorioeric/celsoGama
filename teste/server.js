require("dotenv").config();
const express = require("express");
const homeRoute = require("./src/routes/homeRoute");
const path = require("path");
const fs = require("fs");
const session = require("express-session");
const flash = require("connect-flash");
const database = require("./src/database/database");
const adminRoute = require("./src/routes/adminRoute");
const dashboardRoute = require("./src/routes/dashboardRoute");
const loginRoute = require("./src/routes/loginRoute");
const registerRoute = require("./src/routes/registerRoute");
const loginRegisterRoute = require("./src/routes/loginRegisterRoute");
const validaCPFRoute = require("./src/routes/validaCPFRoute");
const checkCEPRoute = require("./src/routes/checkCEPRoute");
const uploadImagesRoute = require("./src/routes/uploadImagesRoute");

const app = express();
const port = process.env.PORTSERVER || 3000;

app.use(express.static(path.join(__dirname, "./public")));
app.use(express.static(path.join(__dirname, "./public/uploads")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    name: "session",
    secret: process.env.SECRET,
    resave: true,
    cookie: {
      maxAge: 60 * 60 * 1000,
    },
    saveUninitialized: true,
  })
);

app.use(flash());

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use("/", homeRoute);
app.use("/admin", adminRoute);
app.use("/dashboard", dashboardRoute);
app.use("/login", loginRoute);
app.use("/register", registerRoute);
app.use("/loginRegister", loginRegisterRoute);
app.use("/validacpf", validaCPFRoute);
app.use("/checkCEP", checkCEPRoute);
app.use("/uploadImages", uploadImagesRoute);

app.listen(port, async () => {
  const [result] = await database.query("SELECT 1");
  if (result) {
    console.log(`http://localhost:${port}`);
  }
});
