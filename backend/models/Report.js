const mongoose = require("mongoose");

// Report Schema
const reportSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ["Point"], // Specify that the type is a point
      required: true,
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true,
    },
  },
  image: {
    type: String, // URL to the image or file
    required: false, // Optional if you want to allow reports without an image
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the user who created the report
    required: true,
  },
  status: {
    type: String,
    enum: ["processing", "completed", "rejected"], // Possible statuses
    default: "processing", // Default status
  },
});

// Create a 2dsphere index for location
reportSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Report", reportSchema);
