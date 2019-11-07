const express = require("express");
const bodyParse = require("body-parser");
const cors = require("cors");
const consign = require("consign");

const app = express();

app.use(cors());
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));

consign()
  .include("./src/routes")
  .then("./src/models")
  .then("./src/controllers")
  .into(app);
module.exports = app;
