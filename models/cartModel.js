const mongoose = require("mongoose");

const cartschema = new mongoose.Schema({
  userid: String,
  productid: String,
  pname: String,
  pic: String,
  price: String,
  category: String,
  qty: { type: Number, required: true },
});

const cartModel = mongoose.model("cart", cartschema);

module.exports = cartModel;
