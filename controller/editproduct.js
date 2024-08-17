const productModel = require("../models/productmodel");
const { ObjectId } = require("mongodb"); // Import ObjectId if using MongoDB directly

async function editProductController(req, res) {
  const id = req.params.id;
  const { pname, price, rating, reviews, category, productpics } = req.body;

  // Check if all required fields are provided
  if (
    !id ||
    !pname ||
    !price ||
    !rating ||
    !reviews ||
    !category ||
    !productpics
  ) {
    return res.status(201).json({ message: "All fields are required." });
  }

  // Validate ObjectId
  if (!ObjectId.isValid(id)) {
    return res.status(201).json({ message: "Invalid product ID." });
  }

  try {
    // Update the product
    const result = await productModel.updateOne(
      { _id: new ObjectId(id) },
      { $set: { pname, price, rating, reviews, category, productpics } }
    );

    // Check if the update was successful
    if (result.modifiedCount === 0) {
      return res
        .status(201)
        .json({ message: "Product not found or no changes made." });
    }

    res.status(200).json({ message: "Product updated successfully." });
  } catch (error) {
    console.error("Error updating product:", error);
    res
      .status(500)
      .json({ message: "Error updating product.", error: error.message });
  }
}

module.exports = editProductController;
