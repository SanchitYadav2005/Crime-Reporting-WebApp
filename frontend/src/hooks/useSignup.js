import axios from "axios";
import { useState } from "react";
import useUserContext from "./useUserContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useUserContext();

  const signup = async (firstname, lastname, username, email, phone, password) => {
    const url = "http://localhost:8080/api/user/signup";
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(url, {
        firstname,
        lastname,
        username,
        email,
        phone,
        password,
      });

      const newToken = response.data.token;
      localStorage.setItem("token", newToken);

      const userJson = response.data.user; // Adjust if necessary based on your API response
      localStorage.setItem("user", JSON.stringify(userJson));
      dispatch({ type: "LOGIN", payload: userJson });

      return true; // Indicate successful signup
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred while signing up!");
      console.error(error);
      return false; // Indicate failed signup
    } finally {
      setIsLoading(false);
    }
  };

  return { signup, error, isLoading };
};
