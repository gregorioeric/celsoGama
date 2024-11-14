require("dotenv").config();
const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const homeRoute = require("./src/routes/homeRoute");
const path = require("path");
const database = require("./src/database/database");
const dashboardRoute = require("./src/routes/dashboardRoute");
const adminRoute = require("./src/routes/adminRoute");
const loginRoute = require("./src/routes/loginRoute");
const RegisterRoute = require("./src/routes/registerRoute");
const reclamacoesRoute = require("./src/routes/reclamacoesRoute");
const logoutAdminRoute = require("./src/routes/logoutAdminRoute");
const pagesRoute = require("./src/routes/pagesRoute");
const uploadAdminRoute = require("./src/routes/uploadAdminRoute");
const positionRoute = require("./src/routes/positionRoute");

const app = express();
const port = process.env.PORTSERVER || 3000;

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.static(path.join(__dirname, "./public/uploads")));

app.use(cookieParser());
app.use(
  session({
    name: "session",
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: true,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
    },
  })
);

app.use((req, res, next) => {
  res.locals.session = req.session;

  next();
});

app.use("/", homeRoute);
app.use("/admin", adminRoute);
app.use("/dashboard", dashboardRoute);
app.use("/login", loginRoute);
app.use("/register", RegisterRoute);
app.use("/reclamacoes", reclamacoesRoute);
app.use("/logoutAdmin", logoutAdminRoute);
app.use("/pages", pagesRoute);
app.use("/position", positionRoute);
app.use("/upload", uploadAdminRoute);

app.listen(port, async () => {
  const [result] = await database.query("SELECT 1");
  if (result) {
    console.log(`http://localhost:${port}`);
  }
});
