import { useReducer, createContext, useEffect } from "react";
import { userReducer } from "../reducer/userReducer";

// Create the UserContext
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, {
    user: null, // Initial state with user as null
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    // Check if there's a valid stored user and dispatch LOGIN
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        dispatch({ type: "LOGIN", payload: parsedUser });
      } catch (error) {
        console.error("Failed to parse user from localStorage:", error);
        // Optionally, remove the corrupted localStorage entry
        localStorage.removeItem("user");
      }
    }
  }, []); // Empty dependency array to run effect only on component mount

  const contextValue = {
    state,
    dispatch,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};
