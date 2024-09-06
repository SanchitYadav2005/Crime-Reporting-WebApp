const User = require("../models/Users");
const jwt = require("jsonwebtoken");

//creating token
const createToken = async (_id) => {
  await jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

module.exports.createUser = async (req, res) => {
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

    const token = await createToken(user._id);
    res
      .status(200)
      .json({
        message: "user created !",
        user: { email, username, firstname, lastname, phone },
        token,
      });
  } catch (error) {
    console.log(error);
  }
};
