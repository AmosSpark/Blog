const express = require("express"),
  draftsRouter = express.Router();

const draftsController = require("../controllers/drafts_control");

// GET DRAFTS
draftsRouter.get("/", draftsController.getDrafts);

module.exports = draftsRouter;
