import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";
import useUserContext from "../hooks/useUserContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  const navigate = useNavigate();
  const { state } = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(email, password);

    if (success) {
      console.log("Login successful, redirecting...");
      navigate(`/dashboard/`);
    } else {
      console.log("Login failed.");
    }
  };

  // Handle navigation to signup page
  const handleNavigateToSignup = () => {
    navigate("/signup");
  };

  return (
    <>
      <Helmet>
        <title>Alertify | Login</title>
      </Helmet>
      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="text-white text-center mb-8">
          <h1 className="text-5xl font-bold mb-4">
            Access Your Account and{" "}
            <span className="text-yellow-300 font-extrabold">
              Take a Stand Against Crime.
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-5xl mx-auto">
            By logging in, you’re joining a community dedicated to making a
            difference. Report crimes securely and anonymously, helping to
            protect your neighborhood. Every report matters in the fight for a
            safer, stronger community.
          </p>
        </div>
        <section className="bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-lg border border-gray-300">
          <form className="login-form" onSubmit={handleSubmit}>
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
                Logging in...
              </button>
            ) : (
              <button className="btn w-full py-2 mt-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-lg transition-transform duration-300 hover:bg-gradient-to-l hover:scale-105">
                Login
              </button>
            )}
            {error && (
              <div className="text-red-500 text-center mt-2">{error}</div>
            )}
          </form>
          {/* Text above the signup button */}
          <p className="text-center text-gray-600 mt-4">
            You don't have an account?
          </p>
          {/* Signup button below the text */}
          <button
            onClick={handleNavigateToSignup}
            className="mt-2 w-full py-2 bg-green-500 text-white rounded-lg shadow-lg transition-transform duration-300 hover:bg-green-600 hover:scale-105"
          >
            Sign Up
          </button>
        </section>
      </section>
    </>
  );
}
