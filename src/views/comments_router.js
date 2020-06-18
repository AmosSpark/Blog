const express = require("express"),
  commentsRouter = express.Router();

const commentContoller = require("../controllers/comments_controller");

// GET COMMENTS
commentsRouter.get("/", commentContoller.getComments);

module.exports = commentsRouter;
