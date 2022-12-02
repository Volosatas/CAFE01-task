const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const port = 3005;

const db = new sqlite3.Database("data/event-app-db.db", (err) => {
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
  const sqlQuery = "SELECT * FROM attendees";

  db.all(sqlQuery, [], (err, rows) => {
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

  db.run(sqlQuery, [id, firstName, lastName, age, email], (err) => {
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
  const sqlQuery =
    "UPDATE attendees SET firstName = (?), lastName = (?), age = (?), email = (?) WHERE id = (?);";
  const { id, firstName, lastName, age, email } = req.body;

  db.run(sqlQuery, [firstName, lastName, age, email, id], (err) => {
    if (err) {
      throw err;
    }
    res.send(req.body);
  });
});

app.listen(port, () => {
  console.log(`App listening on port - ${port}`);
});
