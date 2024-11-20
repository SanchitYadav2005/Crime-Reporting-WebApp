import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchReports = () => {
  const [reports, setReports] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get("/api/reports");
        setReports(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch reports");
      } finally {
        setIsLoading(false);
      }
    };

    fetchReports();
  }, []);

  return { reports, error, isLoading };
};
