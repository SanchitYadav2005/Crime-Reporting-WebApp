const User = require("../models/Users");
const jwt = require("jsonwebtoken");

//creating token
const createToken = async (_id) => {
  await jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// creation of user
module.exports.createUser = async (req, res) => {
  // all the fields
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
    // token creation
    const token = createToken(user._id);
    res.status(200).json({
      message: "user created !",
      user: { email, username, firstname, lastname, phone },
      token,
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

// login funciton

module.exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({ message: "logged in successfully" }, user, token);
  } catch (error) {
    res.status(error.status).json({ message: error });
  }
};

// logging out the user
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
    console.error(error); 
    res.status(400).json({ message: error.message });
  }
};

