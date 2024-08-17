const mongoose = require("mongoose");
const userModel = require("../models/usermodel");

async function getuserbyidController(req, res) {
  const id = req.params.id;

  try {
    // Convert the string ID to an ObjectId
    const objectId =new mongoose.Types.ObjectId(id);

    // Find a user by ID
    const user = await userModel.findOne({ _id: objectId }).exec();

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(201).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error retrieving user:", error);
    res.status(500).json({
      message: "Error retrieving user",
      success: false,
      error: error.message,
    });
  }
}

module.exports = getuserbyidController;
