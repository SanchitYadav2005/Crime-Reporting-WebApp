require("dotenv").config();
// All packages
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session); // Store session in MongoDB
const Routes = require("./routes/routes");
const userRoutes = require("./routes/userRoutes");
const reportRoutes = require("./routes/reportRoutes"); // Import the report routes
const { authenticate } = require("./middleware/authMiddleware"); // Import the auth middleware

// Configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// CORS configuration
app.use(cors());

// Configure MongoDB session store
const store = new MongoDBStore({ 
  uri: process.env.MONGODB_URL,
  collection: "sessions",
});

// Error handling for MongoDB session store
store.on("error", (error) => {
  console.error("Session store error:", error);
});

// Configured the basic session
app.use(
  session({
    secret: process.env.SESSION_SECRET || "my new secret", // Use environment variable for secret
    resave: false,
    saveUninitialized: false, // Set to false for better performance
    store: store, // Use MongoDB store
    cookie: {
      secure: process.env.NODE_ENV === "production", // Set secure cookie in production
      maxAge: 1000 * 60 * 60 * 24, // Cookie expiry time (1 day)
    },
  })
);

// Routes
app.use("/", Routes);
app.use("/api/user", userRoutes);
app.use("/api/reports", authenticate, reportRoutes); // Protect report routes with authentication

// Connecting to the DB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Connected to DB and server on port ${process.env.PORT}!!`);
    });
  })
  .catch((error) => {
    console.log("DB connection error:", error);
  });
