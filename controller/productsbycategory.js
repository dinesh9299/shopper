const ProductModel = require("../models/productmodel");

async function getproductbycategoryController(req, res) {
  const category = req.params.category;

  if (!category) {
    return res.status(201).json({
      success: false,
      message: "Category is required",
    });
  }

  try {
    const products = await ProductModel.find({ category }).exec();

    if (products.length === 0) {
      return res.status(201).json({
        success: false,
        message: "No products found for this category",
      });
    }

    res.status(200).json(products);
  } catch (error) {
    console.error("Error retrieving products by category:", error);
    res.status(500).json({
      success: false,
      message: "Error retrieving products",
      error: error.message,
    });
  }
}

module.exports = getproductbycategoryController;
