require("dotenv").config();
const express = require("express");
const route = require("./src/routes/routes");
const path = require("path");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const database = require("./src/database/database");
const exp = require("constants");
const dashboardRoute = require("./src/routes/dashboardRoute");
const adminRoute = require("./src/routes/adminRoute");
const eventosRoute = require("./src/routes/eventosRoute");
const contatoRoute = require("./src/routes/contatoRoute");
const { log } = require("console");
const logoutAdminRoute = require("./src/routes/logoutAdminRoute");
const pagesRoute = require("./src/routes/pagesRoute");
const positionRoute = require("./src/routes/positionRoute");
const uploadAdminRoute = require("./src/routes/uploadAdminRoute");

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
    resave: true,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
    },
    saveUninitialized: true,
  })
);

app.use((req, res, next) => {
  res.locals.session = req.session;

  next();
});

app.use(
  "/tinymce",
  express.static(path.join(__dirname, "node_modules", "tinymce"))
);

app.use("/", route);
app.use("/admin", adminRoute);
app.use("/dashboard", dashboardRoute);
app.use("/eventos", eventosRoute);
app.use("/contato", contatoRoute);
app.use("/logoutAdmin", logoutAdminRoute);
app.use("/pages", pagesRoute);
app.use("/position", positionRoute);
app.use("/upload", uploadAdminRoute);

app.use("/pages", pagesRoute);

app.listen(port, async () => {
  const [result] = await database.query("SELECT 1");
  if (result) {
    console.log(`http://localhost:${port}`);
  }
});
