require("dotenv").config();

const express = require("express");

const app = express();

const port = process.env.APP_PORT || 4001;

app.listen(port, () => {
  console.log("Application running at port ", port);
});
