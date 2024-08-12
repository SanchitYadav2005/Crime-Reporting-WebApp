import React from "react";
import { Link } from "react-router-dom";
import { PhoneIcon } from "@heroicons/react/24/outline";
import icon from "../assests/icon.png";

function Navbar() {
  return (
    <nav className="flex items-center justify-evenly mt-2 ms-2 mr-2 bg-background-nav p-5 text-white rounded-lg">
      <div className="text-xl hover:text-logo-color hover:cursor-pointer decoration-solid">
        <img className="w-2 inline mr-2" src={icon} alt="icon" />
        Alertify
      </div>
      <ul className="flex">
        <li>Report</li>
        <li className="ms-12">Contact</li>
        <li className="ms-12">All Reports</li>
      </ul>
      <div className="flex justify-evenly items-center">
        <Link to="login">login</Link>
        <PhoneIcon width={50} height={20} />
      </div>
    </nav>
  );
}

export default Navbar;
