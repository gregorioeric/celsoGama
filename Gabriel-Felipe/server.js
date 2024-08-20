require("dotenv").config();
const express = require("express");
const path = require("path");
const database = require("./src/database/database");
const  route  = require("./src/routes/route");
const routeRegister = require("./src/routes/registerRoute");
const loginRoute = require("./src/routes/loginRoute");
const contatoRoute = require("./src/routes/contatoRoute");
const produtosRoute = require("./src/routes/produtosRoute");

const app = express();
const port = process.env.PORTSERVER || 3000;

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "./public")));

app.use('/', route);
app.use('/register', routeRegister );
app.use('/login', loginRoute );
app.use('/contato', contatoRoute );
app.use('/produto', produtosRoute );

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
