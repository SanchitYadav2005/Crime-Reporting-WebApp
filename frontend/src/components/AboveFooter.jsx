import React from "react";
import { Link } from "react-router-dom";

export default function AboveFooter() {
  return (
    <section className="flex flex-col justify-center items-center text-black mt-24 mb-10 px-4">
      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6">
        Report. <span className="text-blue-300">Protect.</span> Empower.
      </div>
      <Link to={'/registercomplaint'} className="bg-hover_color hover:bg-opacity-90 text-black py-2 px-6 rounded-lg text-base sm:text-lg lg:text-xl font-medium transition-all duration-300 ease-in-out">
        Register Complaint
      </Link>
    </section>
  );
}
