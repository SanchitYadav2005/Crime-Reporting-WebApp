import { useState } from "react";
import axios from "axios";

export const useCreateReport = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const createReport = async (reportData) => {
    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      for (const key in reportData) {
        formData.append(key, reportData[key]);
      }

      // Retrieve the token directly from localStorage
      const token = localStorage.getItem("token"); // Assuming it's saved under the key 'token'

      const response = await axios.post(
        "http://localhost:8080/api/reports/",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Use the existing token from localStorage
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data; // Return the newly created report
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create report");
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { createReport, error, isLoading };
};
