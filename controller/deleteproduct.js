const productModel = require("../models/productmodel");
const { ObjectId } = require("mongodb"); // Import ObjectId if using MongoDB directly

async function deleteProductController(req, res) {
  const id = req.params.id;

  // Validate ObjectId
  if (!ObjectId.isValid(id)) {
    return res.status(201).json({ message: "Invalid product ID." });
  }

  try {
    // Delete the product
    const result = await productModel.deleteOne({ _id: new ObjectId(id) });

    // Check if the delete operation was successful
    if (result.deletedCount === 0) {
      return res.status(201).json({ message: "Product not found." });
    }

    res.status(200).json({ message: "Product deleted successfully." });
  } catch (error) {
    console.error("Error deleting product:", error);
    res
      .status(500)
      .json({ message: "Error deleting product.", error: error.message });
  }
}

module.exports = deleteProductController;
