// src/pages/RegisterComplaint.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateReport } from "../hooks/useCreateReport"; // Use the create report hook
import { Helmet } from "react-helmet";

const RegisterComplaint = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [file, setFile] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const { createReport, error, isLoading } = useCreateReport(); // Use the custom hook
  const navigate = useNavigate();

  // Function to fetch user's location
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`Lat: ${latitude}, Long: ${longitude}`);
          setLocationError(null);
        },
        () => {
          setLocationError("Unable to retrieve your location.");
        }
      );
    } else {
      setLocationError("Geolocation is not supported by this browser.");
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const complaintData = {
      title,
      description,
      location,
      image: file,
      isAnonymous: false,
    };
  
    // Submit report
    const report = await createReport(complaintData);
    console.log("Report created:", report); // Debugging log to check report details
  
    if (report && report.id) {
      setTitle("");
      setDescription("");
      setLocation("");
      setFile(null);
      
      // Redirect to the SingleReport page
      navigate(`/report/${report.id}`);
    } else {
      console.log("Failed to create report or missing report ID.");
    }
  };
  
  return (
    <>
      <Helmet>
        <title>Alertify | Complaint</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 py-6">
        <h1 className="text-3xl font-bold text-white text-center py-4 mb-6">
          Register a Complaint
        </h1>
        {locationError && (
          <p className="text-red-500 text-center">{locationError}</p>
        )}
        {error && <p className="text-red-500 text-center">{error}</p>}
        {!error && isLoading && (
          <p className="text-green-500 text-center">Submitting...</p>
        )}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg mx-4 space-y-4"
        >
          <div>
            <label htmlFor="title" className="block text-white font-medium">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="mt-1 block w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-white font-medium"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows="4"
              className="mt-1 block w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-white font-medium">
              Location
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              className="mt-1 block w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              readOnly
            />
            <button
              type="button"
              onClick={getLocation}
              className="mt-2 bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            >
              Get My Location
            </button>
          </div>

          <div>
            <label htmlFor="file" className="block text-white font-medium">
              Upload Images/Files
            </label>
            <input
              type="file"
              id="file"
              onChange={handleFileChange}
              className="mt-1 block w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          >
            {isLoading ? "Submitting..." : "Submit Complaint"}
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterComplaint;
