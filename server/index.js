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
  console.log("Connected to the event-app SQlite database.");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("etag", false);
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/attendees", (req, res) => {
  let sql = "SELECT * FROM attendees";

  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.send(rows);
  });
});

app.post("/attendees", (req, res) => {
  const sqlQuery =
    "INSERT INTO attendees (id, firstName, lastName, age, email) VALUES (?,?,?,?,?)";
  const { id, firstName, lastName, age, email } = req.body;

  db.run(sqlQuery, [id, firstName, lastName, age, email], (err, rows) => {
    if (err) {
      throw err;
    }
    res.send(req.body);
  });
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
