require("dotenv").config();
//all packages
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");

//routes and all other imports
const Routes = require("./routes/routes");
const userRoutes = require("./routes/userRoutes");

//configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// configured the basic session 
app.use(
  session({
    secret: "my new secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

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
