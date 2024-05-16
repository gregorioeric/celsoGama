const express = require("express");
const route = require("./src/routes/routes");
const path = require("path");
const database = require("./src/database/database");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.static(path.join(__dirname, "./public")));

app.use(route);

database.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Conectado no banco de dados!");
    // app.listen(port, () => {
    //   console.log(`http://localhost:${port}`);
    // });
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

// const express = require("express");
// const route = require("./src/routes/route");
// const port = 5000;

// const app = express();

// app.set("view engine", "ejs");
// app.set("views", "./src/views");

// app.use(route);

// app.use(express.urlencoded({ extended: false }));

// app.listen(port, () => {
//   console.log(`http://localhost:${port}`);
// });
