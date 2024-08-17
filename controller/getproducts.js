const ProductModel = require("../models/productmodel");

async function getproductsController(req, res) {
  const categories = req.query.categories
    ? req.query.categories.split(",")
    : [];

  try {
    let query = {};

    if (categories.length > 0) {
      query.category = { $in: categories };
    }

    // Fetch products from the database
    const products = await ProductModel.find(query).exec();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving products",
      success: false,
      error: error.message,
    });
  }
}

module.exports = getproductsController;
