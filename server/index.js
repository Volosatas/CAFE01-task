const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const port = 3005;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("etag", false);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
