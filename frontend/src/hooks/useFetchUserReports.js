// src/hooks/useFetchUserReports.js
import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchUserReports = (userId) => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReports = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`/api/reports?userId=${userId}`);
        setReports(response.data);
      } catch (err) {
        setError("Error fetching user reports.");
      } finally {
        setLoading(false);
      }
    };
    if (userId) fetchReports();
  }, [userId]);

  return { reports, loading, error, setReports };
};
