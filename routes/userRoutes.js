const express = require("express");
const router = express.Router();

const db = require("./../config/db");

router.get("/", (req, res) => {
  res.json({ message: "Welcome!" });
});

// Example route for fetching all users
router.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.error("Error fetching users:", err);
      res.status(500).json({ error: "Failed to fetch users" });
      return;
    }
    res.json(results);
  });
});

// Example route for creating a new user
router.post("/users", (req, res) => {
  const { username, email } = req.body;
  db.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?,?)",
    [name, email, password],
    (err, result) => {
      if (err) {
        console.error("Error creating user:", err);
        res.status(500).json({ error: "Failed to create user" });
        return;
      }
      res.json({ message: "User created successfully", id: result.insertId });
    }
  );
});

module.exports = router;
