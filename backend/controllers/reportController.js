const Report = require("../models/Report");

module.exports.createReport = async (req, res) => {
  const { title, description, location } = req.body;
  const user = req.user; // Assuming you're using middleware to attach user to req

  try {
    let imageUrl;
    if (req.file) {
      imageUrl = req.file.path; // Path to the uploaded image
    }

    // Ensure `location` includes `type` and `coordinates`
    const reportLocation = {
      type: location?.type || "Point", // Default to "Point" if not provided
      coordinates: location?.coordinates || [0, 0], // Provide a default coordinate or handle as needed
    };

    // Create the report with all necessary data
    const report = await Report.create({
      title,
      description,
      location: reportLocation, // Pass the location object
      image: imageUrl,
      user,
    });

    res.status(201).json({
      message: "Report created successfully!",
      report,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};


// Get all reports
module.exports.getAllReports = async (req, res) => {
  try {
    const reports = await Report.find().populate("user", "username email");
    res.status(200).json(reports);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

// Get report by ID
module.exports.getReportById = async (req, res) => {
  const { id } = req.params;

  try {
    const report = await Report.findById(id).populate("user", "username email");
    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }
    res.status(200).json(report);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

// Update a report
module.exports.updateReport = async (req, res) => {
  const { id } = req.params;
  const { title, description, location, status } = req.body;

  try {
    const report = await Report.findByIdAndUpdate(
      id,
      {
        title,
        description,
        location,
        status,
        image: req.file ? req.file.path : undefined, // Update image if uploaded
      },
      { new: true }
    ); // Return the updated document

    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }

    res.status(200).json({
      message: "Report updated successfully!",
      report,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

// Delete a report
module.exports.deleteReport = async (req, res) => {
  const { id } = req.params;

  try {
    const report = await Report.findByIdAndDelete(id);
    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }
    res.status(200).json({ message: "Report deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};
