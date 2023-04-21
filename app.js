const express = require("express");
const createHttpError = require("http-errors");
const app = express();
require("./helpers/init_db")();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/home", (req, res) => {
  res.status(200).send({
    success: true,
    msg: "Learning Authentication using PassportJS",
  });
});

app.use("/auth", require("./routes/AuthRoutes"));
// Todo : Adding page not found page and error handling middleware

app.use("*/", (req, res, next) => {
  next(createHttpError.NotFound("Page not found...🙄🙄🙄"));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    msg: err.message,
  });
});

app.listen(6060, () =>
  console.log(`Server is running at http://localhost:6060`)
);
