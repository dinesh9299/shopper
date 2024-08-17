const ProductModel = require("../models/productmodel");
const { ObjectId } = require("mongodb"); // Import ObjectId if using MongoDB directly

async function getProductbyidController(req, res) {
  try {
    const id = req.params.id;

    // Check if the provided ID is valid
    if (!ObjectId.isValid(id)) {
      return res.status(201).json({
        message: "Invalid product ID",
        success: false,
      });
    }

    // Find the product by ID
    const product = await ProductModel.findById(id).exec();

    // Check if the product exists
    if (!product) {
      return res.status(201).json({
        message: "Product not found",
        success: false,
      });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving product",
      success: false,
      error: error.message,
    });
  }
}

module.exports = getProductbyidController;
