// Import necessary packages
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();

// Apply CORS middleware to allow all origins
app.use(cors({
  origin: '*', // Allow requests from any origin
}));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1/app", require("./routes"));

// Run app
const bootstrap = async () => {

  try {
    app.listen(process.env.MY_SERVER_PORT, () => {
      console.log(`Server is running on port ${process.env.MY_SERVER_PORT}`);
    });
  } catch (error) {
    console.log(`Error: ${error}`);
    connection.end();
  }
};
bootstrap();