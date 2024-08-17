const cartModel = require("../models/cartModel");

async function cartproductsbyId(req, res) {
  const userId = req.params.id; // Use a more descriptive name for clarity

  try {
    // Find cart items for the specific user
    const cartProducts = await cartModel.find({ userid: userId }).exec();

    // If no cart items are found, return a 404 response
    // if (cartProducts.length === 0) {
    //   return res.status(201).json({
    //     message: "No products found in the cart for this user.",
    //     success: false,
    //   });
    // }

    // Send the found cart items
    res.status(200).json(cartProducts);
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error retrieving cart products:", error);

    // Send an error response
    res.status(201).json({
      message: "Error retrieving cart products",
      success: false,
      error: error.message,
    });
  }
}

module.exports = cartproductsbyId;
