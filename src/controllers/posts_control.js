const posts = require("../models/dbmodel/posts.json"),
  categories = require("../models/dbmodel/categories.json");

// GET POSTS
exports.getPost = (req, res) => {
  res.json(posts);
};

// GET CATEGORIES
exports.getCategories = (req, res) => {
  res.json(categories);
};
