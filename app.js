const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.status(200).send({
    success: true,
    msg: "Learning Authentication using PassportJS",
  });
});

app.listen(6060, () =>
  console.log(`Server is running at http://localhost:6060`)
);
