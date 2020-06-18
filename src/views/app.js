const express = require("express"),
  app = express();

const postsView = require("./posts_router"),
  commentsView = require("./comments_router"),
  draftsView = require("./drafts_router");

const wrongRequestControl = require("../controllers/404_control");

// INIT BODY PASER MW
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// POST ROUTER
const posts_route = "/posts";
app.use(posts_route, postsView);

// COMMENTS ROUTER
const comments_route = "/comments";
app.use(comments_route, commentsView);

// DRAFTS ROUTER
const drafts_route = "/drafts";
app.use(drafts_route, draftsView);

// HANDLE WRONG REQUESTS
app.use(wrongRequestControl.requestNotFound_control);

module.exports = app; // TO sever.js
