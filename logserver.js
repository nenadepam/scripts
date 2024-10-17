const express = require('express');
const fs = require('fs').promises;
const app = express();

// Define a port
const port = process.env.PORT || 8080;

// Define a simple route
app.get('/', async  (req, res) => {
  res.send('Hello, this is your Node.js server running locally!');
});

app.post('/', (req, res) => {
    console.log("Alen send:")
    console.log(JSON.stringify(req.body))
    res.sendStatus(200)
  });
  
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
