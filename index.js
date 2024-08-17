const express = require("express");

const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");

const connectDB = require("./config/db");
const router = require("./routes");

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));

app.use("/api", router);

const PORT = process.env.PORT;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("server is running");
    console.log("connected to db");
  });
});
