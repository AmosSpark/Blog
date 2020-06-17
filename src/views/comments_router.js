const express = require("express"),
  commentsRouter = express.Router();

const commentContoller = require("../controllers/comments_controller");

// GET COMMENTS
commentsRouter.use("/", commentContoller.getComments);

module.exports = commentsRouter;
