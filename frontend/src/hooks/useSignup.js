import axios from "axios";
import useUserContext from "./useUserContext";
import { useState } from "react";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useUserContext();

  const signup = async (
    firstname,
    lastname,
    username,
    email,
    phone,
    password
  ) => {
    const url = "http://localhost:8080/api/user/signup";
    setIsLoading(true);
    setError(false);

    try {
      const token = localStorage.getItem("token");
      const headers = {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      };
      const response = await axios.post(
        url,
        { firstname, lastname, username, email, phone, password },
        headers
      );
      const newToken = response.data.token;
      localStorage.setItem("token", newToken);

      const jsonData = response.data;
      localStorage.setItem("user", JSON.stringify(jsonData));
      dispatch({ type: "LOGIN", payload: jsonData });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError("An error occurred while signing up.");
      }
    }
  };
  return { signup, error, isLoading };
};
