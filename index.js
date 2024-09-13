// server.js (or app.js)

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const router = require("./routes");

const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));

// API routes
app.use("/api", router);

// Get the port from environment variables or default to 3000
const PORT = process.env.PORT || 3000;

// Connect to the database and start the server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log("Connected to database");
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  });
