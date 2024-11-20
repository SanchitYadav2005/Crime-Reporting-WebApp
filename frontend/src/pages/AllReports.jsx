// src/pages/AllReports.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { Helmet } from "react-helmet";
import { useFetchReports } from "../hooks/useFetchReports"; // Import the fetchReports hook

const AllReports = () => {
  const { reports, loading } = useFetchReports(); // Use the custom fetchReports hook

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-white text-lg">Loading reports...</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Alertify | All Reports</title>
      </Helmet>
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen p-6">
        <h1 className="text-4xl font-extrabold text-white mb-8 text-center">
          All Crime Reports
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reports.map((report) => (
            <Link
              to={`/report/${report.id}`}
              key={report.id}
              className="relative block bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative h-40 overflow-hidden rounded-t-lg">
                <img
                  src={
                    report.imageUrl ||
                    "https://via.placeholder.com/300x200?text=Report+Image"
                  }
                  alt={report.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2 hover:text-gray-300 transition-colors duration-200">
                  {report.title}
                </h2>
                <p className="text-gray-400 mb-4">
                  {report.description.slice(0, 100)}...
                </p>
                {/* Read More Button Section */}
                <div className="flex justify-center">
                  <span className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm px-6 py-2 rounded-lg shadow-md transition-all duration-300 hover:bg-blue-600 transform hover:scale-105">
                    Read More
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllReports;
