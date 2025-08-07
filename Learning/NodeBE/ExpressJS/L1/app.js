// // core Modules
// const http = require('http');

// External Module
const express = require('express');

// Local Module
const requestHandler = require('./user');

const app = express();

// Parse incoming form data
app.use(express.urlencoded({ extended: false }));

app.use("/", (req, res, next) => {
  console.log("Come in first middileware ", req.url, req.method);
  next();
});

app.use("/submit-details", (req, res, next) => {
  console.log("Come in second middileware ", req.url, req.method);
  next(); // Allow the request to go to actual requestHandler logic
});

// Use custom request handler
app.use(requestHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
