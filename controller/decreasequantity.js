const cartModel = require("../models/cartModel");

async function decreasecartqtyController(req, res) {
  const { userid, productid } = req.body;

  if (!userid || !productid) {
    return res.status(201).json({
      message: "userid and productid are required",
    });
  }

  try {
    // Find the cart item first
    const cartItem = await cartModel.findOne({ userid, productid });

    if (!cartItem) {
      return res.status(201).json({
        message: "Product not found in the cart",
      });
    }

    // Check if the quantity is greater than 1 before decrementing
    if (cartItem.qty <= 1) {
      return res.status(201).json({
        message: "Cannot decrease quantity below 1",
      });
    }

    // Decrement the quantity
    const result = await cartModel.findOneAndUpdate(
      { userid, productid },
      { $inc: { qty: -1 } },
      { new: true } // Use 'new' to return the updated document
    );

    if (result) {
      res.json({
        message: "Product quantity updated successfully",
        cartItem: result,
      });
    } else {
      res.status(201).json({
        message: "Product not found in the cart",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error updating cart item",
      success: false,
      error: error.message,
    });
  }
}

module.exports = decreasecartqtyController;
