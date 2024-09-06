const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlenght: 0,
  },
});
UserSchema.statics.signup = async function (
  email,
  username,
  firstname,
  lastname,
  phone,
  password
) {
  const User = this;
  const exists = await User.findOne({ email });
  if (exists) {
    throw new Error("User already exists!!");
  }
  if (!email || !password || !username || !firstname || !lastname || !phone) {
    throw new Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw new Error("Invalid email !!");
  }
  if (
    !validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
  ) {
    throw new Error("Password is not strong enough!");
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await User.create({
    email,
    password: hash,
    username,
    firstname,
    lastname,
    phone,
  });
  return user;
};

module.exports = mongoose.model("User", UserSchema);
