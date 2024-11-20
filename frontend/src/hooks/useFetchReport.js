// src/hooks/useFetchReport.js
import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchReport = (reportId) => {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReport = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`/api/reports/${reportId}`);
        setReport(response.data);
      } catch (err) {
        setError("Error fetching report");
      } finally {
        setLoading(false);
      }
    };

    if (reportId) fetchReport();
  }, [reportId]);

  return { report, loading, error };
};
