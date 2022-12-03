const express = require("express");
const bodyParser = require("body-parser");
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

app.post("/users", (req, res) => {
  const sqlQuery = "SELECT * FROM users WHERE username = ? AND password = ?";
  const { username, password } = req.body;

  db.all(sqlQuery, [username, password], (err, rows) => {
    if (err) {
      return;
    } else if (rows.length > 0) {
      res.status(200);
      res.send({ username: username, userId: rows[0].userId });
    } else {
      res.status(401);
      res.json("Incorrect username or password");
    }
  });
});

app.get("/:userId/attendees", (req, res) => {
  const { userId } = req.params;
  const sqlQuery = "SELECT * FROM attendees WHERE userId = (?)";

  db.all(sqlQuery, [userId], (err, rows) => {
    if (err) {
      throw err;
    }
    res.status(200);
    res.send(rows);
  });
});

app.post("/:userId/attendees", (req, res) => {
  const { userId } = req.params;
  const { attendeeId, firstName, lastName, age, email } = req.body;
  const sqlQuery = `INSERT INTO attendees (attendeeId, userId, firstName, lastName, age, email) VALUES (?,?,?,?,?,?)`;

  db.run(
    sqlQuery,
    [attendeeId, userId, firstName, lastName, age, email],
    (err) => {
      if (err) {
        throw err;
      }
      res.status(200);
      res.json(req.body);
    }
  );
});

app.delete("/attendees/:attendeeId", (req, res) => {
  const { attendeeId } = req.params;
  const sqlQuery = "DELETE FROM attendees WHERE attendeeId = (?)";

  db.run(sqlQuery, [attendeeId], (err) => {
    if (err) {
      throw err;
    }
    res.send(req.body);
  });
});

app.put("/attendees/:attendeeId", (req, res) => {
  const { attendeeId } = req.params;
  const { id, firstName, lastName, age, email } = req.body;
  const sqlQuery = `UPDATE attendees SET firstName = (?), lastName = (?), age = (?), email = (?) WHERE attendeeId = (?);`;

  db.run(sqlQuery, [firstName, lastName, age, email, attendeeId], (err) => {
    if (err) {
      throw err;
    }
    res.send(req.body);
  });
});

app.listen(port, () => {
  console.log(`App listening on port - ${port}`);
});
