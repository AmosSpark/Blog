const comments = require("../models/dbmodel/comments.json");

// GET COMMENTS
exports.getComments = (req, res) => {
  res.json(comments);
};
