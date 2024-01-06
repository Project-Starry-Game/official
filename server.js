const { log } = require("console");
const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all routes
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// Database setup
const db = new sqlite3.Database(
  "./mydatabase.db",
  sqlite3.OPEN_READONLY,
  (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to the SQLite database.");
  }
);

// Database setup for information.db
const dbInfo = new sqlite3.Database(
  "./information.db",
  sqlite3.OPEN_READONLY,
  (err) => {
    if (err) {
      console.error(
        "Error connecting to the information database:",
        err.message
      );
    } else {
      console.log("Connected to the information database.");
    }
  }
);

const dbRelease = new sqlite3.Database(
  "./release.db",
  sqlite3.OPEN_READONLY,
  (err) => {
    if (err) {
      console.error(
        "Error connecting to the information database:",
        err.message
      );
    } else {
      console.log("Connected to the information database.");
    }
  }
);

// Serve static files from the Vue project
app.use(express.static(path.join(__dirname, "dist")));

// API endpoint to get images
app.get("/api/images", (req, res) => {
  const sql = "SELECT * FROM Images";
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    // Update the paths to include the correct folder and filename
    const updatedRows = rows.map((row) => {
      return {
        ...row,
        imgSrc: row.imgSrc, // Assuming imgSrc contains 'asset0.png', 'asset1.png', etc.
      };
    });
    console.log(updatedRows);
    res.json({
      message: "success",
      data: updatedRows,
    });
  });
});

// API endpoint to get website description data
app.get("/api/description", (req, res) => {
  const sql = "SELECT * FROM WebsiteInfo";
  dbInfo.all(sql, [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

app.get("/api/platforms", (req, res) => {
  const sql = "SELECT * FROM Platforms";
  dbInfo.all(sql, [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

// Handle SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
