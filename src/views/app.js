const express = require("express"),
  app = express();

const wrongRequestControl = require("../controllers/404_control");

// INIT BODY PASER MW
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// HANDLE WRONG REQUESTS
app.use(wrongRequestControl.requestNotFound_control);

module.exports = app; // TO sever.js
