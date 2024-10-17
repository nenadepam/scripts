const express = require('express');
const fs = require('fs').promises;
const app = express();

// Define a port
const port = process.env.PORT || 8080;

// Define a simple route
app.get('/', async  (req, res) => {
 await fs.appendFile('logs.txt', 'tests');
  res.send('Hello, this is your Node.js server running locally!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
