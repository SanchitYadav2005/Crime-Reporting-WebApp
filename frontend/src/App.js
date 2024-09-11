import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:8080/");
      if (res) {
        setData(res.data);
        console.log(data);
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
      </Routes>
    </div>
  );
}

export default App;
