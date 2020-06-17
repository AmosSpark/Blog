const categories = require("../models/dbmodel/categories.json");

// GET CATEGORIES
exports.getCategories = (req, res) => {
  res.json(categories);
};
