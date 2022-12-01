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

app.post("/attendees", (req, res) => {
  const attendees = fs.readFileSync("data/attendees.json", "utf8");
  const attendeesArr = JSON.parse(attendees);

  const newAttendee = {
    id: req.body.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    email: req.body.email,
  };
  const newAttendeesArr = [...attendeesArr, newAttendee];

  fs.writeFileSync(
    "data/attendees.json",
    JSON.stringify(newAttendeesArr, null, 2)
  );

  res.json(newAttendeesArr);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
