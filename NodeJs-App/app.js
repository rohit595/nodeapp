const express = require("express");
require("dotenv/config");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

const podsRouts = require("./routes/products");

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to db")
);

app.use(bodyParser.json());
app.use("/product", podsRouts);

app.get("/", (req, res) => {
  "working";
});

app.listen(3005);
