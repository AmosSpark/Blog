const express = require("express"),
  postRouter = express.Router();

const postController = require("../controllers/posts_control");

// GET POSTS
postRouter.get("/", postController.getPost);

// GET CATEGORIES
postRouter.get("/categories", postController.getCategories);

module.exports = postRouter;
