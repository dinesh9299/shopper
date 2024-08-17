const productModel = require("../models/productmodel");

async function addproductController(req, res) {
  const { pname, price, rating, reviews, category, productpics } = req.body;

  // Validate input fields
  if (!pname) {
    return res
      .status(201) // Use 201 Bad Request
      .json({ success: false, message: "Please provide product name" });
  }
  if (!price) {
    return res
      .status(201)
      .json({ success: false, message: "Please provide product price" });
  }
  if (!rating) {
    return res
      .status(201)
      .json({ success: false, message: "Please provide product rating" });
  }
  if (!reviews) {
    return res
      .status(201)
      .json({ success: false, message: "Please provide product reviews" });
  }
  if (!category) {
    return res
      .status(201)
      .json({ success: false, message: "Please provide product category" });
  }

  if (!Array.isArray(productpics) || productpics.length === 0) {
    return res.status(201).json({
      success: false,
      message: "Please upload at least one product image",
    });
  }

  try {
    // Create a new product document
    const newProduct = new productModel({
      pname,
      price,
      rating,
      reviews,
      category,
      productpics,
      qty: 1,
    });

    // Save the product to the database
    const savedProduct = await newProduct.save();

    // Respond with the saved product data
    res.status(201).json({
      data: savedProduct,
      success: true,
      message: "Product added successfully",
    });
  } catch (error) {
    console.error("Error adding product:", error); // Log detailed error
    res.status(500).json({
      message: error.message || "Internal server error",
      error: true,
      success: false,
    });
  }
}

module.exports = addproductController;
