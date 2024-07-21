require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.urlencoded({ extended: true }));


mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db and server!!");
      
    });
  })
  .catch((error) => {
    console.log(error);
  });
