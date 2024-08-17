const userModel = require("../models/usermodel");

async function getuserController(req, res) {
  try {
    // Retrieve all users from the database
    const users = await userModel.find({}).exec();

    res.status(200).json(users);
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).json({ message: "Error retrieving users", success: false });
  }
}

module.exports = getuserController;
