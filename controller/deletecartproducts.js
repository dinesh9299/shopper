const cartModel = require("../models/cartModel");

async function deletecartproductController(req, res) {
  const productId = req.params.id;
  const userId = req.params.uid;

  try {
    // Attempt to delete the product from the user's cart
    const result = await cartModel.deleteOne({
      productid: productId,
      userid: userId,
    });

    // Check if a document was deleted
    if (result.deletedCount === 0) {
      return res.status(201).json({
        message: "Product not found in the cart for this user.",
        success: false,
      });
    }

    // Respond with success message
    res.status(204).json({
      message: "Product successfully deleted from the cart.",
      success: true,
    });
  } catch (error) {
    console.error("Error deleting product from cart:", error);
    res.status(500).json({
      message: "Error deleting product from cart.",
      success: false,
      error: error.message,
    });
  }
}

module.exports = deletecartproductController;
