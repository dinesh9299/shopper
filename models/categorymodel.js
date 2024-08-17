const mongoose = require("mongoose");

const categoryschema = new mongoose.Schema(
  {
    cname: String,
    cid: String,
  },
  {
    timestamps: true,
  }
);

const categoryModel = mongoose.model("categorie", categoryschema);

module.exports = categoryModel;
