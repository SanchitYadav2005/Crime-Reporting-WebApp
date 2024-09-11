import React, { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <section className="flex">
      <div className="text-white mt-auto mb-auto text-center mr-28 ml-28">
        <h1 className="text-3xl font-bold mb-6">
          Access Your Account and <span className="text-text_color font-extrabold">Take a Stand Against Crime.</span>
        </h1>
        <p className="text-xl mr-32 ml-32 text-gray-400">
          By logging in, you’re joining a community dedicated to making a
          difference. Report crimes securely and anonymously, and help protect
          your neighborhood. Every report matters in the fight for a safer,
          stronger community.
        </p>
      </div>
      <section className="bg-white form-section">
        <form action="" className="login-form">
          <input
            className="input"
            type="email"
            required
            name="email"
            id="email"
            value={email}
            onChange={handleEmail}
            placeholder="Email"
          />
          <input
            className="input"
            type="password"
            required
            name="password"
            id="password"
            value={password}
            onChange={handlePassword}
            placeholder="Password"
          />
          <button className="login-btn">Signup</button>
        </form>
      </section>
    </section>
  );
}
