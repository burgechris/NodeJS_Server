const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('In the MiddleEarth')
  next(); // Allows the request to continue on to the next middleware in line
});

app.use((req, res, next) => {
  console.log("In the MiddleWare");
  res.send('<h1>Hello From Express.js!</h1>');
});

const server = http.createServer(app);

server.listen(7000);