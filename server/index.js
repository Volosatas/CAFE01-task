const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const port = 3005;

let db = new sqlite3.Database("data/event-app-db.db", (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connected to the in-memory SQlite database.");
});

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

// const sqlQuery =
//   "CREATE TABLE attendees (id TEXT PRIMARY KEY UNIQUE NOT NULL, firstName TEXT NOT NULL, lastName TEXT NOT NULL, age INTEGER NOT NULL, email TEXT NOT NULL)";
// db.run(sqlQuery);

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

app.delete("/attendees/:id", (req, res) => {
  const { id } = req.params;
  const data = fs.readFileSync("data/attendees.json", "utf-8");
  const jsonData = JSON.parse(data);
  const filteredData = jsonData.filter((attendee) => attendee.id !== id);

  fs.writeFileSync(
    "data/attendees.json",
    JSON.stringify(filteredData, null, 2),
    "utf-8"
  );

  res.send(filteredData);
});

app.put("/attendees/:id", (req, res) => {
  const { id } = req.params;
  const newAttendee = req.body;
  const data = fs.readFileSync("data/attendees.json", "utf-8");
  const jsonData = JSON.parse(data);
  const index = jsonData.findIndex((attendee) => attendee.id === id);

  jsonData[index] = newAttendee;

  fs.writeFileSync(
    "data/attendees.json",
    JSON.stringify(jsonData, null, 2),
    "utf-8"
  );

  res.send(newAttendee);
});

app.listen(port, () => {
  console.log(`App listening on port - ${port}`);
});
