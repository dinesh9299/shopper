const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    pname: String,
    price: String,
    rating: String,
    reviews: String,
    category: String,
    productpics: Array,
  },
  {
    timestamps: true,
  }
);

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;
