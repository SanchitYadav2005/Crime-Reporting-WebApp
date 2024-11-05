const express = require("express");
const {
  createReport,
  getAllReports,
  getReportById,
  updateReport,
  deleteReport,
} = require("../controllers/reportController");
const { authenticate } = require("../middleware/authMiddleware"); // Import the auth middleware
const multer = require("multer");

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Specify your upload directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Rename the file to avoid conflicts
  },
});
const upload = multer({ storage });

// Create a router
const router = express.Router();

// Protecting the routes with authenticate middleware
router.use(authenticate); // Apply middleware to all routes

// Create a new report
router.post("/", upload.single("image"), createReport);

// Get all reports
router.get("/", getAllReports);

// Get a report by ID
router.get("/:id", getReportById);

// Update a report
router.patch("/:id", updateReport);

// Delete a report
router.delete("/:id", deleteReport);

module.exports = router;
