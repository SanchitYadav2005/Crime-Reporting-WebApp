import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PhoneIcon } from "@heroicons/react/24/outline";
import icon from "../assests/icon.png";
import useUserContext from "../hooks/useUserContext";
import { useLogout } from "../hooks/useLogout";

function Navbar() {
  const { state } = useUserContext();
  const { logout } = useLogout();
  const phoneNumber = "9528016139";
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
    setDropdownOpen(false); // Close dropdown after making a call
  };

  const handleSendSMS = () => {
    window.location.href = `sms:${phoneNumber}`;
    setDropdownOpen(false); // Close dropdown after sending SMS
  };

  const handleContactClick = () => {
    setDropdownOpen(false); // Close dropdown when navigating to contact page
  };

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="flex items-center justify-between mt-2 mx-2 p-5 text-white rounded-lg">
      {/* Left section: Logo */}
      <div className="text-xl hover:text-hover_color hover:cursor-pointer">
        <img className="inline-block w-6 mr-2" src={icon} alt="icon" />
        Alertify
      </div>

      {/* Middle section: Links for larger screens */}
      <ul className="hidden sm:flex space-x-12">
        <li className="hover:text-hover_color">
          <Link to="/registercomplaint">Report</Link>
        </li>
        <li className="hover:text-hover_color">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="hover:text-hover_color">
          <Link to="/allreports">All Reports</Link>
        </li>
      </ul>

      {/* Right section: User and phone icons */}
      <div className="hidden sm:flex items-center space-x-4 relative">
        {state.user ? (
          <Link className="btn hover:text-hover_color" onClick={logout}>
            Logout
          </Link>
        ) : (
          <>
            <Link className="hover:text-hover_color" to="/login">
              Login
            </Link>
            <Link className="hover:text-hover_color ml-3" to="/signup">
              Signup
            </Link>
          </>
        )}

        {/* Phone icon with dropdown */}
        <div className="relative">
          <PhoneIcon
            className="phone_logo hover:cursor-pointer"
            width={50}
            onClick={toggleDropdown}
          />
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
              <ul className="py-1 text-sm text-white">
                <li
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                  onClick={handleCallClick}
                >
                  Call Emergency
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                  onClick={handleSendSMS}
                >
                  Send SMS
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                  onClick={handleContactClick}
                >
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* For mobile devices: Hamburger menu or collapse option */}
      <div className="sm:hidden flex items-center space-x-2">
        {state.user ? (
          <Link className="btn hover:text-hover_color" onClick={logout}>
            Logout
          </Link>
        ) : (
          <>
            <Link className="hover:text-hover_color" to="/login">
              Login
            </Link>
            <Link className="hover:text-hover_color ml-2" to="/signup">
              Signup
            </Link>
          </>
        )}
        {/* Mobile version of phone icon with dropdown */}
        <div className="relative">
          <PhoneIcon
            className="phone_logo hover:cursor-pointer"
            width={30}
            onClick={toggleDropdown}
          />
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
              <ul className="py-1 text-sm text-white">
                <li
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                  onClick={handleCallClick}
                >
                  Call Emergency
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                  onClick={handleSendSMS}
                >
                  Send SMS
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                  onClick={handleContactClick}
                >
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
