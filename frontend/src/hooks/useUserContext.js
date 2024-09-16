import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw Error("AuthContext must be used inside an AuthContextProvider");
  }
  return context;
};

export default useUserContext;
