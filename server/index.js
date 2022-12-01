const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors");

const app = express();
const port = 3005;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("etag", false);
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/attendees", (req, res) => {
  const attendees = fs.readFileSync("data/attendees.json", "utf8");
  JSON.parse(attendees);
  res.send(attendees);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
