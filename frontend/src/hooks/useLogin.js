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

      const response = await axios.post(
        url,
        {
          email,
          password,
        },
        { headers }
      );
      const newToken = response.data.token;
      localStorage.setItem("token", newToken);

      const userJson = response.data;
      localStorage.setItem("user", JSON.stringify(userJson));
      dispatch({ type: "LOGIN", payload: userJson });
    } catch (error) {
      setIsLoading(false);
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError("An error occurred while logging in!");
        console.error(error);
      }
    }
  };
  return { login, error, isLoading };
};
