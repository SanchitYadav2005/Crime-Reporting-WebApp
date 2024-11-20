// src/hooks/useRegisterComplaint.js
import { useState } from "react";
import axios from "axios";

const useRegisterComplaint = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const registerComplaint = async (title, description, location, file) => {
    setError(null);
    setSuccess(false);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("location", location);
    if (file) {
      formData.append("file", file);
    }

    try {
      // Replace with your backend API endpoint
      await axios.post("/api/complaints", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSuccess(true);
    } catch (err) {
      setError("Failed to register complaint. Please try again.");
    }
  };

  return { registerComplaint, error, success };
};

export default useRegisterComplaint;
