const posts = require("../models/dbmodel/posts.json");

// GET POSTS
exports.getPost = (req, res) => {
  res.json(posts);
};
