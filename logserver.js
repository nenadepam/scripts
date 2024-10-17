const express = require('express');
const app = express();

// Define a port
const port = 8080;

// Define a simple route
app.get('/', (req, res) => {
  res.setHeader('bypass-tunnel-reminder', '1234')
  res.send('Hello, this is your Node.js server running locally!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});