const cartModel = require("../models/cartModel");

async function updatecartqtyController(req, res) {
  const { userid, productid } = req.body;

  if (!userid || !productid) {
    return res.status(400).json({
      message: "userid and productid are required",
    });
  }

  try {
    const result = await cartModel.findOneAndUpdate(
      { userid, productid },
      { $inc: { qty: 1 } },
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

module.exports = updatecartqtyController;
