import React, { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [username, setUserName] = useState(null);
  const [firstname, setFirstName] = useState(null);
  const [lastname, setLastName] = useState(null);
  const [phone, setPhone] = useState(null);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleFistName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  return (
    <section className="flex">
      <div className="text-white mt-auto mb-auto text-center mr-28 ml-28">
        <h1 className="text-3xl font-bold mb-6">
          Access Your Account and{" "}
          <span className="text-text_color font-extrabold">
            Take a Stand Against Crime.
          </span>
        </h1>
        <p className="text-xl mr-32 ml-32 text-gray-400">
          By logging in, you’re joining a community dedicated to making a
          difference. Report crimes securely and anonymously, and help protect
          your neighborhood. Every report matters in the fight for a safer,
          stronger community.
        </p>
      </div>
      <section className="bg-white form-section-2">
        <form action="" className="signup-form">
          <input
            className="input2"
            type="text"
            required
            name="firstname"
            id="firstname"
            value={firstname}
            onChange={handleFistName}
            placeholder="First Name"
          />
          <input
            className="input2"
            type="text"
            required
            name="lastname"
            id="lastname"
            value={lastname}
            onChange={handleLastName}
            placeholder="Last Name"
          />
          <input
            className="input2"
            type="email"
            required
            name="email"
            id="firstname"
            value={email}
            onChange={handleEmail}
            placeholder="Email"
          />
          <input
            className="input2"
            type="text"
            required
            name="usename"
            id="username"
            value={username}
            onChange={handleUserName}
            placeholder="Username"
          />
          <div className="flex items-center">
            <span className="num-prefix">+91</span>
            <input
              className="input2"
              type="number"
              required
              name="phone"
              id="phone"
              value={phone}
              onChange={handlePhone}
              placeholder="Phone"
            />
          </div>
          <input
            className="input2"
            type="password"
            required
            name="password"
            id="password"
            value={password}
            onChange={handlePassword}
            placeholder="Password"
          />
          <button className="signup-btn">Signup</button>
        </form>
      </section>
    </section>
  );
}
