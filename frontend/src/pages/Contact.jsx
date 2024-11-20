// src/pages/Contact.js
import React, { useState, useEffect } from "react";
import { FaPhone, FaAmbulance, FaFireExtinguisher } from "react-icons/fa";
import { Helmet } from "react-helmet";

// Icons mapping
const icons = {
  "Emergency Police Contact": <FaPhone />,
  "Ambulance Services": <FaAmbulance />,
  "Fire Department": <FaFireExtinguisher />,
};

// Default emergency contacts if location is not found
const defaultContacts = [
  {
    title: "Emergency Police Contact",
    number: "100",
    icon: icons["Emergency Police Contact"],
  },
  {
    title: "Ambulance Services",
    number: "102",
    icon: icons["Ambulance Services"],
  },
  {
    title: "Fire Department",
    number: "101",
    icon: icons["Fire Department"],
  },
  {
    title: "Local Police Station",
    number: "1234567890",
    icon: <FaPhone />, // Default icon for local police
  },
  {
    title: "Traffic Control Room",
    number: "9876543210",
    icon: <FaPhone />, // Default icon for traffic control
  },
];

// Regional contacts by state in India with icons
const regionalContacts = {
  Maharashtra: [
    {
      title: "Mumbai Police",
      number: "022 2262 0022",
      icon: icons["Emergency Police Contact"],
    },
    {
      title: "Ambulance Mumbai",
      number: "1298",
      icon: icons["Ambulance Services"],
    },
    { title: "Fire Department", number: "101", icon: icons["Fire Department"] },
    {
      title: "Local Police Station",
      number: "022 2262 0000",
      icon: icons["Emergency Police Contact"],
    },
    { title: "Traffic Control", number: "022 2493 7755", icon: <FaPhone /> },
  ],
  Delhi: [
    {
      title: "Delhi Police",
      number: "011 2341 0001",
      icon: icons["Emergency Police Contact"],
    },
    {
      title: "Ambulance Delhi",
      number: "102",
      icon: icons["Ambulance Services"],
    },
    { title: "Fire Department", number: "101", icon: icons["Fire Department"] },
    {
      title: "Local Police Station",
      number: "011 2341 0002",
      icon: icons["Emergency Police Contact"],
    },
    { title: "Traffic Control", number: "011 2584 4444", icon: <FaPhone /> },
  ],
  UttarPradesh: [
    {
      title: "Lucknow Police",
      number: "0522 100",
      icon: icons["Emergency Police Contact"],
    },
    {
      title: "Ambulance Lucknow",
      number: "108",
      icon: icons["Ambulance Services"],
    },
    { title: "Fire Department", number: "101", icon: icons["Fire Department"] },
    {
      title: "Local Police Station",
      number: "0522 2615555",
      icon: icons["Emergency Police Contact"],
    },
    { title: "Traffic Control", number: "0522 2286666", icon: <FaPhone /> },
  ],
  Karnataka: [
    {
      title: "Bangalore Police",
      number: "080 2294 3001",
      icon: icons["Emergency Police Contact"],
    },
    {
      title: "Ambulance Bangalore",
      number: "108",
      icon: icons["Ambulance Services"],
    },
    { title: "Fire Department", number: "101", icon: icons["Fire Department"] },
    {
      title: "Local Police Station",
      number: "080 2294 0002",
      icon: icons["Emergency Police Contact"],
    },
    { title: "Traffic Control", number: "080 2225 5475", icon: <FaPhone /> },
  ],
  TamilNadu: [
    {
      title: "Chennai Police",
      number: "044 2345 0001",
      icon: icons["Emergency Police Contact"],
    },
    {
      title: "Ambulance Chennai",
      number: "108",
      icon: icons["Ambulance Services"],
    },
    { title: "Fire Department", number: "101", icon: icons["Fire Department"] },
    {
      title: "Local Police Station",
      number: "044 2345 0002",
      icon: icons["Emergency Police Contact"],
    },
    { title: "Traffic Control", number: "044 2345 5544", icon: <FaPhone /> },
  ],
  WestBengal: [
    {
      title: "Kolkata Police",
      number: "033 2214 0001",
      icon: icons["Emergency Police Contact"],
    },
    {
      title: "Ambulance Kolkata",
      number: "102",
      icon: icons["Ambulance Services"],
    },
    { title: "Fire Department", number: "101", icon: icons["Fire Department"] },
    {
      title: "Local Police Station",
      number: "033 2214 0002",
      icon: icons["Emergency Police Contact"],
    },
    { title: "Traffic Control", number: "033 2225 4444", icon: <FaPhone /> },
  ],
  Rajasthan: [
    {
      title: "Jaipur Police",
      number: "0141 2294 0001",
      icon: icons["Emergency Police Contact"],
    },
    {
      title: "Ambulance Jaipur",
      number: "108",
      icon: icons["Ambulance Services"],
    },
    { title: "Fire Department", number: "101", icon: icons["Fire Department"] },
    {
      title: "Local Police Station",
      number: "0141 2294 0002",
      icon: icons["Emergency Police Contact"],
    },
    { title: "Traffic Control", number: "0141 2225 5475", icon: <FaPhone /> },
  ],
  Gujarat: [
    {
      title: "Ahmedabad Police",
      number: "079 2562 0001",
      icon: icons["Emergency Police Contact"],
    },
    {
      title: "Ambulance Ahmedabad",
      number: "108",
      icon: icons["Ambulance Services"],
    },
    { title: "Fire Department", number: "101", icon: icons["Fire Department"] },
    {
      title: "Local Police Station",
      number: "079 2562 0002",
      icon: icons["Emergency Police Contact"],
    },
    { title: "Traffic Control", number: "079 2225 4475", icon: <FaPhone /> },
  ],
  Punjab: [
    {
      title: "Amritsar Police",
      number: "0183 2222 0001",
      icon: icons["Emergency Police Contact"],
    },
    {
      title: "Ambulance Amritsar",
      number: "108",
      icon: icons["Ambulance Services"],
    },
    { title: "Fire Department", number: "101", icon: icons["Fire Department"] },
    {
      title: "Local Police Station",
      number: "0183 2222 0002",
      icon: icons["Emergency Police Contact"],
    },
    { title: "Traffic Control", number: "0183 2255 4444", icon: <FaPhone /> },
  ],
  Kerala: [
    {
      title: "Thiruvananthapuram Police",
      number: "0471 2222 0001",
      icon: icons["Emergency Police Contact"],
    },
    {
      title: "Ambulance Thiruvananthapuram",
      number: "108",
      icon: icons["Ambulance Services"],
    },
    { title: "Fire Department", number: "101", icon: icons["Fire Department"] },
    {
      title: "Local Police Station",
      number: "0471 2222 0002",
      icon: icons["Emergency Police Contact"],
    },
    { title: "Traffic Control", number: "0471 2225 4444", icon: <FaPhone /> },
  ],
  AndhraPradesh: [
    {
      title: "Vijayawada Police",
      number: "0866 257 0001",
      icon: icons["Emergency Police Contact"],
    },
    {
      title: "Ambulance Vijayawada",
      number: "108",
      icon: icons["Ambulance Services"],
    },
    { title: "Fire Department", number: "101", icon: icons["Fire Department"] },
    {
      title: "Local Police Station",
      number: "0866 257 0002",
      icon: icons["Emergency Police Contact"],
    },
    { title: "Traffic Control", number: "0866 2255 4444", icon: <FaPhone /> },
  ],
  Bihar: [
    {
      title: "Patna Police",
      number: "0612 2222 0001",
      icon: icons["Emergency Police Contact"],
    },
    {
      title: "Ambulance Patna",
      number: "108",
      icon: icons["Ambulance Services"],
    },
    { title: "Fire Department", number: "101", icon: icons["Fire Department"] },
    {
      title: "Local Police Station",
      number: "0612 2222 0002",
      icon: icons["Emergency Police Contact"],
    },
    { title: "Traffic Control", number: "0612 2255 4444", icon: <FaPhone /> },
  ],
  Telangana: [
    {
      title: "Hyderabad Police",
      number: "040 2785 0001",
      icon: icons["Emergency Police Contact"],
    },
    {
      title: "Ambulance Hyderabad",
      number: "108",
      icon: icons["Ambulance Services"],
    },
    { title: "Fire Department", number: "101", icon: icons["Fire Department"] },
    {
      title: "Local Police Station",
      number: "040 2785 0002",
      icon: icons["Emergency Police Contact"],
    },
    { title: "Traffic Control", number: "040 2785 4444", icon: <FaPhone /> },
  ],
  Jharkhand: [
    {
      title: "Ranchi Police",
      number: "0651 2222 0001",
      icon: icons["Emergency Police Contact"],
    },
    {
      title: "Ambulance Ranchi",
      number: "108",
      icon: icons["Ambulance Services"],
    },
    { title: "Fire Department", number: "101", icon: icons["Fire Department"] },
    {
      title: "Local Police Station",
      number: "0651 2222 0002",
      icon: icons["Emergency Police Contact"],
    },
    { title: "Traffic Control", number: "0651 2255 4444", icon: <FaPhone /> },
  ],
  Uttarakhand: [
    {
      title: "Dehradun Police",
      number: "0135 2222 0001",
      icon: icons["Emergency Police Contact"],
    },
    {
      title: "Ambulance Dehradun",
      number: "108",
      icon: icons["Ambulance Services"],
    },
    { title: "Fire Department", number: "101", icon: icons["Fire Department"] },
    {
      title: "Local Police Station",
      number: "0135 2222 0002",
      icon: icons["Emergency Police Contact"],
    },
    { title: "Traffic Control", number: "0135 2255 4444", icon: <FaPhone /> },
  ],
  Haryana: [
    {
      title: "Gurugram Police",
      number: "0124 271 0001",
      icon: icons["Emergency Police Contact"],
    },
    {
      title: "Ambulance Gurugram",
      number: "108",
      icon: icons["Ambulance Services"],
    },
    { title: "Fire Department", number: "101", icon: icons["Fire Department"] },
    {
      title: "Local Police Station",
      number: "0124 271 0002",
      icon: icons["Emergency Police Contact"],
    },
    { title: "Traffic Control", number: "0124 271 4444", icon: <FaPhone /> },
  ],
  HimachalPradesh: [
    {
      title: "Shimla Police",
      number: "0177 2222 0001",
      icon: icons["Emergency Police Contact"],
    },
    {
      title: "Ambulance Shimla",
      number: "108",
      icon: icons["Ambulance Services"],
    },
    { title: "Fire Department", number: "101", icon: icons["Fire Department"] },
    {
      title: "Local Police Station",
      number: "0177 2222 0002",
      icon: icons["Emergency Police Contact"],
    },
    { title: "Traffic Control", number: "0177 2255 4444", icon: <FaPhone /> },
  ],
  Chhattisgarh: [
    {
      title: "Raipur Police",
      number: "0771 2222 0001",
      icon: icons["Emergency Police Contact"],
    },
    {
      title: "Ambulance Raipur",
      number: "108",
      icon: icons["Ambulance Services"],
    },
    { title: "Fire Department", number: "101", icon: icons["Fire Department"] },
    {
      title: "Local Police Station",
      number: "0771 2222 0002",
      icon: icons["Emergency Police Contact"],
    },
    { title: "Traffic Control", number: "0771 2255 4444", icon: <FaPhone /> },
  ],
  Assam: [
    {
      title: "Guwahati Police",
      number: "0361 2222 0001",
      icon: icons["Emergency Police Contact"],
    },
    {
      title: "Ambulance Guwahati",
      number: "108",
      icon: icons["Ambulance Services"],
    },
    { title: "Fire Department", number: "101", icon: icons["Fire Department"] },
    {
      title: "Local Police Station",
      number: "0361 2222 0002",
      icon: icons["Emergency Police Contact"],
    },
    { title: "Traffic Control", number: "0361 2255 4444", icon: <FaPhone /> },
  ],
  Meghalaya: [
    {
      title: "Shillong Police",
      number: "0364 2222 0001",
      icon: icons["Emergency Police Contact"],
    },
    {
      title: "Ambulance Shillong",
      number: "108",
      icon: icons["Ambulance Services"],
    },
    { title: "Fire Department", number: "101", icon: icons["Fire Department"] },
    {
      title: "Local Police Station",
      number: "0364 2222 0002",
      icon: icons["Emergency Police Contact"],
    },
    { title: "Traffic Control", number: "0364 2255 4444", icon: <FaPhone /> },
  ],
  Nagaland: [
    {
      title: "Kohima Police",
      number: "0370 2222 0001",
      icon: icons["Emergency Police Contact"],
    },
    {
      title: "Ambulance Kohima",
      number: "108",
      icon: icons["Ambulance Services"],
    },
    { title: "Fire Department", number: "101", icon: icons["Fire Department"] },
    {
      title: "Local Police Station",
      number: "0370 2222 0002",
      icon: icons["Emergency Police Contact"],
    },
    { title: "Traffic Control", number: "0370 2255 4444", icon: <FaPhone /> },
  ],
  Manipur: [
    {
      title: "Imphal Police",
      number: "0385 2222 0001",
      icon: icons["Emergency Police Contact"],
    },
    {
      title: "Ambulance Imphal",
      number: "108",
      icon: icons["Ambulance Services"],
    },
    { title: "Fire Department", number: "101", icon: icons["Fire Department"] },
    {
      title: "Local Police Station",
      number: "0385 2222 0002",
      icon: icons["Emergency Police Contact"],
    },
    { title: "Traffic Control", number: "0385 2255 4444", icon: <FaPhone /> },
  ],
  Tripura: [
    {
      title: "Agartala Police",
      number: "0381 2222 0001",
      icon: icons["Emergency Police Contact"],
    },
    {
      title: "Ambulance Agartala",
      number: "108",
      icon: icons["Ambulance Services"],
    },
    { title: "Fire Department", number: "101", icon: icons["Fire Department"] },
    {
      title: "Local Police Station",
      number: "0381 2222 0002",
      icon: icons["Emergency Police Contact"],
    },
    { title: "Traffic Control", number: "0381 2255 4444", icon: <FaPhone /> },
  ],
  Sikkim: [
    {
      title: "Gangtok Police",
      number: "03592 2222 0001",
      icon: icons["Emergency Police Contact"],
    },
    {
      title: "Ambulance Gangtok",
      number: "108",
      icon: icons["Ambulance Services"],
    },
    { title: "Fire Department", number: "101", icon: icons["Fire Department"] },
    {
      title: "Local Police Station",
      number: "03592 2222 0002",
      icon: icons["Emergency Police Contact"],
    },
    { title: "Traffic Control", number: "03592 2255 4444", icon: <FaPhone /> },
  ],
  JammuKashmir: [
    {
      title: "Srinagar Police",
      number: "0194 2501 0001",
      icon: icons["Emergency Police Contact"],
    },
    {
      title: "Ambulance Srinagar",
      number: "108",
      icon: icons["Ambulance Services"],
    },
    { title: "Fire Department", number: "101", icon: icons["Fire Department"] },
    {
      title: "Local Police Station",
      number: "0194 2501 0002",
      icon: icons["Emergency Police Contact"],
    },
    { title: "Traffic Control", number: "0194 2505 4444", icon: <FaPhone /> },
  ],
  Ladakh: [
    {
      title: "Leh Police",
      number: "01982 2541 000",
      icon: icons["Emergency Police Contact"],
    },
    {
      title: "Ambulance Leh",
      number: "108",
      icon: icons["Ambulance Services"],
    },
    { title: "Fire Department", number: "101", icon: icons["Fire Department"] },
    {
      title: "Local Police Station",
      number: "01982 2541 001",
      icon: icons["Emergency Police Contact"],
    },
    { title: "Traffic Control", number: "01982 2542 444", icon: <FaPhone /> },
  ],
  AndamanNicobar: [
    {
      title: "Port Blair Police",
      number: "03192 2331 000",
      icon: icons["Emergency Police Contact"],
    },
    {
      title: "Ambulance Port Blair",
      number: "108",
      icon: icons["Ambulance Services"],
    },
    { title: "Fire Department", number: "101", icon: icons["Fire Department"] },
    {
      title: "Local Police Station",
      number: "03192 2331 001",
      icon: icons["Emergency Police Contact"],
    },
    { title: "Traffic Control", number: "03192 2335 444", icon: <FaPhone /> },
  ],
  Lakshadweep: [
    {
      title: "Kavaratti Police",
      number: "04896 2611 000",
      icon: icons["Emergency Police Contact"],
    },
    {
      title: "Ambulance Kavaratti",
      number: "108",
      icon: icons["Ambulance Services"],
    },
    { title: "Fire Department", number: "101", icon: icons["Fire Department"] },
    {
      title: "Local Police Station",
      number: "04896 2611 001",
      icon: icons["Emergency Police Contact"],
    },
    { title: "Traffic Control", number: "04896 2612 444", icon: <FaPhone /> },
  ],
};

const Contact = () => {
  const [contacts, setContacts] = useState(defaultContacts);

  // Simulated user location (for demonstration purposes)
  const userLocation = "Delhi"; // Change this to test different states

  useEffect(() => {
    if (regionalContacts[userLocation]) {
      setContacts(regionalContacts[userLocation]);
    } else {
      setContacts(defaultContacts);
    }
  }, [userLocation]);

  return (
    <>
    <Helmet>
      <title>Alertify | Contact</title>
    </Helmet>
    <div className="min-h-screen bg-gray-900 py-10 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-white shadow-lg">
          Emergency Contacts
        </h1>
        <p className="text-lg text-center mb-10 text-gray-300">
          For your safety and assistance, please find the emergency contact
          numbers for your location below.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-xl p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 flex flex-col items-center justify-center"
            >
              <div className="text-lg font-semibold text-blue-400 mb-2 flex items-center">
                {contact.icon} {/* Display the icon here */}
                <span className="ml-2">{contact.title}</span>{" "}
                {/* Add some spacing */}
              </div>
              <p className="text-gray-200 text-xl font-bold">
                {contact.number}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
