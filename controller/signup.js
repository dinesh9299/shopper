const userModel = require("../models/usermodel");

async function userSignupController(req, res) {
  try {
    const { email, name, password,profilepic } = req.body;

    const user = await userModel.findOne({ email });

    if (user) {
      throw new Error("user already exist");
    }

    if (!email) {
      throw new Error("please provide Email");
    }
    if (!name) {
      throw new Error("please provide name");
    }
    if (!password) {
      throw new Error("please provide password");
    }

    const userData = new userModel({
      email,
      name,
      password,
      role: "GENERAL",
      profilepic,
    });

    const saveUser = userData.save();

    res.status(201).json({
      data: saveUser,
      success: true,
      error: false,
      message: "user created succesfully",
    });
  } catch (error) {
    res.json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

module.exports = userSignupController;
