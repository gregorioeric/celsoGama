require("dotenv").config();
const express = require("express");
const path = require("path");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const database = require("./src/database/database");
const dashboardRoute = require("./src/routes/dashboardRoute");
const adminRoute = require("./src/routes/adminRoute");
const loginRoute = require("./src/routes/loginRoute");
const homeRoute = require("./src/routes/homeRoute");
const registerBookRoute = require("./src/routes/registerBookRoutes");
const logoutRoute = require("./src/routes/logoutRoute");
const getAllBooksAPIRoute = require("./src/routes/getBooksAPIRoute");
const alunosRoute = require("./src/routes/alunosRoute");
const alunosRouteAPI = require("./src/routes/alunosRouteAPI");
const bookRoute = require("./src/routes/bookRoute");
const loanBooksRoute = require("./src/routes/loanBooksRoute");
const categoriesRoute = require("./src/routes/categoriesBooksRoute");

const app = express();
const port = process.env.PORTSERVER || 3000;

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(bodyParser.urlencoded({ extended: true }));
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

app.use("/", adminRoute);
app.use("/home", homeRoute);
app.use("/dashboard", dashboardRoute);
app.use("/login", loginRoute);
app.use("/registerBooks", registerBookRoute);
app.use("/alunos", alunosRoute);
app.use("/loanBooks", loanBooksRoute);
app.use("/logout", logoutRoute);
app.use("/book", bookRoute);
app.use("/livros", categoriesRoute);
app.use("/getAllBooksAPI", getAllBooksAPIRoute);
app.use("/getAllAlunosAPI", alunosRouteAPI);

app.listen(port, async () => {
  const [result] = await database.query("SELECT 1");
  if (result) {
    console.log(`http://localhost:${port}`);
  }
});
