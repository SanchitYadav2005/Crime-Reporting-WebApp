const User = require("../models/Users");
const jwt = require("jsonwebtoken");

// Creating token
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" }); // Return the token
};

// Creation of user
module.exports.createUser = async (req, res) => {
  // All the fields
  const { email, username, firstname, lastname, phone, password } = req.body;
  try {
    const user = await User.signup(
      email,
      username,
      firstname,
      lastname,
      phone,
      password
    );

    // Token creation
    const token = createToken(user._id); // No need to await, just call it
    res.status(201).json({ // Use 201 Created status code
      message: "User created!",
      user: { email, username, firstname, lastname, phone },
      token,
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(400).json({ message: error.message || "User creation failed." }); // Provide a fallback message
  }
};

// Login function
module.exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password." }); // Handle invalid login
    }

    const token = createToken(user._id); // No need to await, just call it
    res.status(200).json({ message: "Logged in successfully", user, token });
  } catch (error) {
    console.error("Login error:", error); // Log the error for debugging
    const statusCode = error.status || 500; // Default to 500 if status is not set
    res.status(statusCode).json({ message: error.message || "Login failed." }); // Provide a fallback message
  }
};

// Logging out the user
module.exports.logoutUser = (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Failed to logout!" });
      }
      res.clearCookie("connect.sid");
      res.status(200).json({ message: "Logged out successfully" });
    });
  } catch (error) {
    console.error("Logout error:", error); // Log the error for debugging
    res.status(400).json({ message: error.message || "Logout failed." }); // Provide a fallback message
  }
};
