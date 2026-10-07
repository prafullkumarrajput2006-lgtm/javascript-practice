// 📁 File: index.js

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

// Enable CORS for frontend (React or HTML)
app.use(cors());

// Dummy internship data
const internships = [
  "Google - AI Intern",
  "TCS - Analyst Intern",
  "Microsoft - Web Dev Intern",
  "Infosys - Cloud Intern",
  "Amazon - ML Intern"
];

// Routes
app.get("/internships", (req, res) => {
  res.json(internships);
});

// Example POST route (for resume submission - to be expanded)
app.post("/submit-resume", express.json(), (req, res) => {
  const { name, resumeText } = req.body;
  console.log(Resume received from ${name});
  res.json({ message: "Resume received!" });
});

// Start server
app.listen(PORT, () => {
  console.log(✅ Express server running on http://localhost:${PORT});
});