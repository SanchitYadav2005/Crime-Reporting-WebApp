require("dotenv").config();
//all packages
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
//routes and all other imports
const Routes = require('./routes/routes')

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/', Routes)
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
