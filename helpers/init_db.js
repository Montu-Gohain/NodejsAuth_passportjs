const mongoose = require("mongoose");
const MONGO_URL = "mongodb://127.0.0.1:27017/passportjs";
module.exports = () =>
  mongoose
    .connect(MONGO_URL)
    .then(() => console.log("MongoDB connected successfully."))
    .catch((err) => console.log(err.message));
