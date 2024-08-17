const categoryModel = require("../models/categorymodel");

async function getcategoryController(req, res) {
  try {
    // Retrieve all users from the database
    const categories = await categoryModel.find({}).exec();

    res.status(200).json(categories);
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).json({ message: "Error retrieving users", success: false });
  }
}

module.exports = getcategoryController;
