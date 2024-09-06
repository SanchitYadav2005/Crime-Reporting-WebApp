require("dotenv").config();
//all packages
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");



//routes and all other imports
const Routes = require("./routes/routes");
const userRoutes = require("./routes/userRoutes");

//configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());


//routes
app.use("/", Routes);
app.use("/api/user", userRoutes);

//connecting to the DB
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
