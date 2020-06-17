const express = require("express"),
  postRouter = express.Router();

const postController = require("../controllers/posts_control");

// GET POSTS
postRouter.use("/", postController.getPost);

module.exports = postRouter;
