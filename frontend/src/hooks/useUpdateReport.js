import { useState } from "react";
import axios from "axios";

export const useUpdateReport = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const updateReport = async (id, reportData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.patch(`/api/reports/${id}`, reportData);
      return response.data; // Return the updated report
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update report");
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { updateReport, error, isLoading };
};
