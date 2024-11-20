import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useSignup } from "../hooks/useSignup";
import { useNavigate } from "react-router-dom";
import useUserContext from "../hooks/useUserContext";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const { signup, error, isLoading } = useSignup();
  const navigate = useNavigate();
  const { state } = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await signup(
      firstname,
      lastname,
      username,
      email,
      phone,
      password
    );

    // Only navigate if signup was successful
    if (success) {
      navigate(`/dashboard/`);
    }
  };

  // Handle navigation to login page
  const handleNavigateToLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <Helmet>
        <title>Alertify | Sign Up</title>
      </Helmet>
      <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="text-white text-center mb-8 md:mb-0 md:mr-20">
          <h1 className="text-5xl font-bold mb-4">
            Create Your Account and{" "}
            <span className="text-yellow-300 font-extrabold">
              Stand Against Crime.
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-md mx-auto">
            Join a community dedicated to making a difference. Report crimes
            securely and anonymously, helping to protect your neighborhood.
          </p>
        </div>
        <section className="bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-lg border border-gray-300">
          <form className="signup-form" onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              required
              placeholder="First Name"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              className="input"
              type="text"
              required
              placeholder="Last Name"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              className="input"
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="input"
              type="text"
              required
              placeholder="Username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              className="input"
              type="tel" // Changed to "tel" for better UX on mobile
              required
              placeholder="Phone (without prefix)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              className="input"
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {isLoading ? (
              <button
                className="btn w-full py-2 mt-4 bg-blue-600 text-white rounded-lg opacity-50 cursor-not-allowed"
                disabled
              >
                Signing up...
              </button>
            ) : (
              <button className="btn w-full py-2 mt-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-lg transition-transform duration-300 hover:bg-gradient-to-l hover:scale-105">
                Sign Up
              </button>
            )}
            {error && (
              <div className="text-red-500 text-center mt-2">{error}</div>
            )}
          </form>
          {/* Text above the login button */}
          <p className="text-center text-gray-600 mt-4">
            Already have an account?
          </p>
          {/* Login button below the text */}
          <button
            onClick={handleNavigateToLogin}
            className="mt-2 w-full py-2 bg-green-500 text-white rounded-lg shadow-lg transition-transform duration-300 hover:bg-green-600 hover:scale-105"
          >
            Log In
          </button>
        </section>
      </section>
    </>
  );
}
