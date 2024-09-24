require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const database = require("./src/database/database");
const route = require("./src/routes/route");
const routeRegister = require("./src/routes/registerRoute");
const loginRoute = require("./src/routes/loginRoute");
const contatoRoute = require("./src/routes/contatoRoute");
const produtosRoute = require("./src/routes/produtosRoute");
const adminRoute = require("./src/routes/admin/adminRoute");

const app = express();
const port = process.env.PORTSERVER || 3000;

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "./public")));

app.use(cookieParser());
app.use(
  session({
    name: "session",
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: true,
    cookie: {
      maxAge: 60 * 60 * 1000,
      httpOnly: true,
    },
  })
);

app.use((req, res, next) => {
  res.locals.session = req.session;

  next();
});

app.use("/", loginRoute);
app.use("/register", routeRegister);
// app.use("/login", loginRoute);
app.use("/contato", contatoRoute);
app.use("/produto", produtosRoute);
app.use("/admin", adminRoute);

app.listen(port, async () => {
  const [result] = await database.query("SELECT 1");
  if (result) {
    console.log(`http://localhost:${port}`);
  }
});
