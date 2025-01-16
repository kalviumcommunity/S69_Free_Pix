const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express()
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
  res.send('Hello World!')
})



// DB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to database!");
    app.listen(port, () => {
      console.log(`Server is running on port ${process.env.PORT} and http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log("Connection failed!", error);
  });