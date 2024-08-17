const cartModel = require("../models/cartModel");

async function addtoCartController(req, res) {
  const { userid, productid, pname, pic, price, category } = req.body;

  // Validate input
  if (!userid || !productid || !pname || !pic || !price || !category) {
    return res.status(201).json({
      message: "All fields are required",
    });
  }

  try {
    // Check if the product is already in the cart
    const existingItem = await cartModel.findOne({ productid, userid });

    if (existingItem) {
      return res.status(200).json({
        message: "Product is already in the cart",
      });
    }

    // Create a new cart item
    const newCart = new cartModel({
      userid,
      productid,
      pname,
      pic,
      price,
      category,
      qty: 1, // Default quantity
    });

    // Save the new cart item
    const savedCart = await newCart.save();

    // Respond with the saved cart item
    res.status(201).json({
      data: savedCart,
      success: true,
      message: "product added to cart",
    });
  } catch (error) {
    console.error("Error adding product to cart:", error);
    res.status(500).json({
      message: "Error adding product to cart",
      error: error.message,
    });
  }
}

module.exports = addtoCartController;
