import { useState } from "react";
import axios from "axios";

export const useDeleteReport = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const deleteReport = async (id) => {
    setIsLoading(true);
    setError(null);

    try {
      await axios.delete(`/api/reports/${id}`);
      return true; // Successfully deleted
    } catch (err) {
      setError(err.response?.data?.message || "Failed to delete report");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { deleteReport, error, isLoading };
};
