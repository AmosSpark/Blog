const drafts = require("../models/dbmodel/dfafts.json");

// GET DRAFTS
exports.getDrafts = (req, res) => {
  res.json(drafts);
};
