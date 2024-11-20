import React from "react";

export default function HeroSection() {
  return (
    <main className="text-center px-4">
      <h1 className="main-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
        Anonymous. <span className="text-white sel">Secure.</span> Effective.
      </h1>
      <p className="text-gray-500 text-lg sm:text-xl lg:text-2xl w-full sm:w-3/4 lg:w-1/2 mx-auto mt-4">
        Your identity is protected, your reports are confidential, and your
        actions make a difference. Together, we create safer communities.
      </p>
    </main>
  );
}
