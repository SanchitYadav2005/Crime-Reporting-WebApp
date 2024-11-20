// src/pages/Dashboard.js
import React from "react";
import useUserContext from "../hooks/useUserContext";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useLogout } from "../hooks/useLogout";
import { useFetchUserReports } from "../hooks/useFetchUserReports";
import axios from "axios";

export default function Dashboard() {
  const { state } = useUserContext();
  const user = state?.user;
  const navigate = useNavigate();
  const { logout } = useLogout();
  const { reports, loading, error, setReports } = useFetchUserReports(user?.id);

  const handleDelete = async (reportId) => {
    try {
      await axios.delete(`/api/reports/${reportId}`);
      setReports((prevReports) => prevReports.filter((report) => report.id !== reportId));
    } catch (err) {
      console.error("Error deleting report:", err);
    }
  };

  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <p className="text-white text-lg">Loading reports...</p>
  //     </div>
  //   );
  // }

  return (
    <>
      <Helmet>
        <title>Alertify | Dashboard</title>
      </Helmet>
      <section className="bg-gray-900 min-h-screen p-6 flex flex-col justify-center items-center">
        <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-semibold text-white mb-6 text-center">
            User Dashboard
          </h1>

          {/* User Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <span className="block text-gray-400 text-sm mb-2">Full Name</span>
              <p className="text-lg font-semibold text-white">
                {user?.firstname} {user?.lastname}
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <span className="block text-gray-400 text-sm mb-2">Username</span>
              <p className="text-lg font-semibold text-white">{user?.username}</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <span className="block text-gray-400 text-sm mb-2">Email</span>
              <p className="text-lg font-semibold text-white">{user?.email}</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <span className="block text-gray-400 text-sm mb-2">Phone</span>
              <p className="text-lg font-semibold text-white">{user?.phone}</p>
            </div>
          </div>

          {/* Reports Section */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Your Reports</h2>
            {error && <p className="text-red-500">{error}</p>}
            {reports.length > 0 ? (
              <ul className="space-y-4">
                {reports.map((report) => (
                  <li key={report.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-white">{report.title}</h3>
                    <p className="text-gray-400 mb-2">{report.description}</p>
                    <div className="flex space-x-4">
                      <button
                        onClick={() => navigate(`/update-report/${report.id}`)}
                        className="bg-yellow-500 text-white py-1 px-3 rounded-lg hover:bg-yellow-600 transition"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(report.id)}
                        className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400">You have no reports at the moment.</p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4">
            <Link
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
              to="/"
            >
              Back
            </Link>
            <Link
              className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition"
              to="/registercomplaint"
            >
              Create Report
            </Link>
            <button
              className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
