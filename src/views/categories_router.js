const express = require("express"),
  catergoriesRouter = express.Router();
const categoriesController = require("../controllers/categories_control");

// GET CATEGORIES
catergoriesRouter.use("/", categoriesController.getCategories);

module.exports = catergoriesRouter;
