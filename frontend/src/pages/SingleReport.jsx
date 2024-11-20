// src/pages/SingleReport.js
import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useFetchReport } from "../hooks/useFetchReport"; // Import the custom hook

const SingleReport = () => {
  const { reportId } = useParams();
  const { report, loading, error } = useFetchReport(reportId); // Use the custom hook

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-white text-lg">Loading report...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Alertify | Report {reportId}</title>
      </Helmet>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">{report.title}</h1>
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <h2 className="text-xl font-semibold">Description:</h2>
          <p>{report.description}</p>
          <h2 className="text-xl font-semibold">Status:</h2>
          <p>{report.status}</p>
          <h2 className="text-xl font-semibold">Date:</h2>
          <p>{new Date(report.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    </>
  );
};

export default SingleReport;
