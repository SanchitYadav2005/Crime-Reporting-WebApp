import axios from "axios";
import { useState } from "react";
import useUserContext from "./useUserContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useUserContext();

  const login = async (email, password) => {
    const url = "http://localhost:8080/api/user/login";
    setIsLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");
      const headers = {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      };

      const response = await axios.post(url, { email, password }, { headers });

      // Handle successful login: store token, user data, and dispatch login
      const newToken = response.data.token;
      localStorage.setItem("token", newToken);

      const userJson = response.data.user; 
      localStorage.setItem("user", JSON.stringify(userJson));
      dispatch({ type: "LOGIN", payload: userJson });

      setIsLoading(false); // Set loading state back to false after successful login
      return true; // Return true on successful login
    } catch (error) {
      setIsLoading(false); // Ensure loading state is false after an error

      // Improved error handling
      if (error.response && error.response.data) {
        const errorMessage = error.response.data.error || "An error occurred during login.";
        setError(errorMessage);
      } else {
        setError("A network error occurred. Please try again.");
      }

      console.error("Login error:", error); // Log the complete error for debugging
      return false; // Return false if an error occurs
    }
  };

  return { login, error, isLoading };
};
