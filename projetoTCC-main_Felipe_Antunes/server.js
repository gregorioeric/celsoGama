require("dotenv").config();
const express = require("express");
const path = require("path");
const session = require('express-session');
const database = require("./src/database/database");
const route  = require("./src/routes/route");
const routeRegister = require("./src/routes/registerRoute");
const loginRoute = require("./src/routes/loginRoute");
const adminRoute = require("./src/routes/adminRoute");
const dashboardRoute = require("./src/routes/dashboardRoute");
const cookieParser = require("cookie-parser");
const logoutAdminRoute = require("./src/routes/logoutAdminRoute");
const logoutRoute = require("./src/routes/logoutRoute");
const produtosRoute = require("./src/routes/produtosRoute");
const noticiasRoute = require("./src/routes/noticiasRoute");
const pagesRoute = require("./src/routes/pagesRoute");
const fichaRoute = require("./src/routes/fichaRoute");
const contatoRoute = require("./src/routes/contatoRoute");
const compraRoute = require("./src/routes/compraRoute");
const poscompraRoute = require("./src/routes/poscompraRoute");


const app = express();
const port = process.env.PORTSERVER || 3000;

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "./public")));

app.use(cookieParser())
app.use(
  session({
  name: 'session',
  secret: process.env.SECRET,
  resave: true,
  cookie: {
    maxAge: 60 * 60 * 1000
  },
  saveUninitialized: true
}))

app.use((req, res, next) => {
  res.locals.session = req.session;

  next();
});

app.use('/', loginRoute);
app.use('/index', route);
app.use('/register', routeRegister );
app.use('/noticias', noticiasRoute);
app.use('/produtos', produtosRoute)
app.use("/admin", adminRoute);
app.use("/dashboard", dashboardRoute);
app.use('/logoutAdmin', logoutAdminRoute);
app.use ('/logout', logoutRoute);
app.use('/pages', pagesRoute);
app.use('/ficha', fichaRoute);
app.use('/contato', contatoRoute);
app.use('/compra', compraRoute);
app.use('/poscompra', poscompraRoute);


app.listen(port, async () => {
  const [result] = await database.query("SELECT 1");
  if (result) {
    console.log(`http://localhost:${port}`);
    
  }
}) ;



// database.connect((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Conectado no banco de dados!");
//     app.listen(port, () => {
//       console.log(`http://localhost:${port}`);
//     });
//   }
// });

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
