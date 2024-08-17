const userModel = require("../models/usermodel");

async function UserSigninController(req, res) {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!email) {
      throw new Error("please provide email");
    }
    if (!password) {
      throw new Error("please provide password");
    }

    if (user) {
      const checkPassword = password === user.password;

      if (checkPassword) {
        res.status(200).json({
          message: "login successfully",
          success: true,
          data: {
            _id: user._id,
            email: user.email,
            role: user.role,
          },
        });
      } else {
        res.status(201).json({
          message: "password doesn't match",
          success: false,
        });
      }
    } else {
      res.status(201).json({
        message: "invalid user",
      });
    }
  } catch (error) {
    res.json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

module.exports = UserSigninController;
