import React from "react";
import { Link } from "react-router-dom";
import { PhoneIcon } from "@heroicons/react/24/outline";
import icon from "../assests/icon.png";

function Navbar() {
  return (
    <nav className="flex items-center justify-evenly mt-2 ms-2 mr-2  p-5 text-white rounded-lg">
      <div className="text-xl hover:text-hover_color hover:cursor-pointer decoration-solid">
        <img className="w-2 inline mr-2" src={icon} alt="icon" />
        Alertify
      </div>
      <ul className="flex">
        <li className="hover:text-hover_color">
          <Link to={"/report"}>Report</Link>
        </li>
        <li className="ms-12 hover:text-hover_color ">
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li className="ms-12 hover:text-hover_color">
          <Link to={"/allreports"}>All Reports</Link>
        </li>
      </ul>
      <div className="flex justify-evenly items-center">
        <Link to="login">login</Link>
        <PhoneIcon className="phone_logo" width={50} />
      </div>
    </nav>
  );
}

export default Navbar;
