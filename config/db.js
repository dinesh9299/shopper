const mongoose = require("mongoose");

async function connettoDb() {
  try {
    mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.log(error);
  }
}

module.exports = connettoDb;
