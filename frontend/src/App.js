// src/App.js
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes, Navigate } from "react-router-dom";
import useUserContext from "./hooks/useUserContext"; // Import custom user context

// pages
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import SingleReport from "./pages/SingleReport";
import AllReports from "./pages/AllReports";
import RegisterComplaint from "./pages/RegisterComplaint";
import Contact from "./pages/Contact";

function App() {
  const [data, setData] = useState();
  const { state } = useUserContext(); // Access the user context state
  const user = state?.user;

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:8080/");
      if (res) {
        setData(res.data);
      }
    };
    getData();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/report/:id"
          element={user ? <SingleReport /> : <Navigate to="/login" />}
        />
        <Route
          path="/allreports"
          element={user ? <AllReports /> : <Navigate to="/login" />}
        />

        {/* Public Routes */}
        <Route path="/registercomplaint" element={<RegisterComplaint />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;


