// index.js

const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');

// Initialize dotenv to use environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Sample route to handle a GET request
app.get('/', (req, res) => {
  res.send('Hello, this is my Node.js microservice!');
});

// A route that interacts with an external API (example: fetching user info)
app.get('/user', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching user data');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Microservice is running on http://localhost:${port}`);
});

