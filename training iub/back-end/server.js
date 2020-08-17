const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = require("./routes");

app.use(bodyParser.json());

const port = 8080;

app.listen(port, () => {
  console.log("serveru merge pe " + port);
});
