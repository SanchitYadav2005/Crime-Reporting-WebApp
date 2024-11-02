const jwt = require("jsonwebtoken");
const User = require("../models/Users"); // Adjust the path as necessary

// Authentication middleware
const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from Bearer token format

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.SECRET);
    // Find the user associated with the token
    req.user = await User.findById(decoded._id).select("-password"); // Exclude password from user info
    next(); // Continue to the next middleware or route handler
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Invalid token." });
  }
};

module.exports = { authenticate };
