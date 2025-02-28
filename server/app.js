const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware to parse JSON requests
app.use(bodyParser.json());

// In-memory store for spreadsheets (you could use a database here)
let sheets = {};

// Save a sheet to the server
app.post('/save', (req, res) => {
  const { sheetId, data } = req.body;
  sheets[sheetId] = data;
  res.send({ success: true });
});

// Load a sheet from the server
app.get('/load/:sheetId', (req, res) => {
  const { sheetId } = req.params;
  res.json(sheets[sheetId] || []);
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
