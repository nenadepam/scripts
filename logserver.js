const express = require('express');
const fs = require('fs').promises;
const app = express();

// Define a port
const port = process.env.PORT || 8080;
let loggerData= '';
app.use(express.json())

// Define a simple route
app.get('/', async  (req, res) => {
  res.send('Hello, this is your Node.js server running locally!');
});

app.post('/', async  (req, res) => {
    console.log("Alen send:")
    loggerData = loggerData +' \n ' + JSON.stringify(req.body)
    console.log(JSON.stringify(req.body))
    res.status(200).send(loggerData)
  });
  
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
