import React from "react";
import { Link } from "react-router-dom";
import { PhoneIcon } from "@heroicons/react/24/outline";
import icon from "../assests/icon.png";
import useUserContext from "../hooks/useUserContext";

function Navbar() {
  const { state } = useUserContext();
  const phoneNumber = "9528016139";
  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <nav className="flex items-center justify-evenly mt-2 ms-2 mr-2  p-5 text-white rounded-lg max-sm:justify-start">
      <div className="text-xl hover:text-hover_color hover:cursor-pointer decoration-solid">
        <img className="w-2 inline mr-2" src={icon} alt="icon" />
        Alertify
      </div>
      <ul className="flex max-sm:hidden">
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
      <div className="flex justify-evenly items-center max-sm:hidden">
        {state.user ? (
          <Link className="btn">Logout</Link>
        ) : (
          <>
            <Link className="hover:text-hover_color" to="/login">
              login
            </Link>
            <Link className="hover:text-hover_color ml-3" to="/signup">
              signup
            </Link>
          </>
        )}

        <PhoneIcon
          className="phone_logo"
          width={50}
          onClick={handleCallClick}
        />
      </div>
    </nav>
  );
}

export default Navbar;
