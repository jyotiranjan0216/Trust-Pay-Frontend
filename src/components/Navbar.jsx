import logo from "../images/main-logo.png";
import personImg from "../images/LoginLogo.png";
import { Link, useNavigate } from "react-router-dom";

import React, { useState } from "react";

const Navbar = ({firstName}) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  console.log(`firstname: ${firstName}`);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/">
            <img src={logo} alt="trustpay logo" className="w-20 sm:w-48" />
          </Link>
        </div>
        <div className="relative flex gap-5 justify-center items-center">
          <div className="text-xs sm:text-3xl">Hello, {firstName}</div>
          <button onClick={toggleDropdown} className="focus:outline-none">
            <img
              src={personImg}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover hover:opacity-90"
            />
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-24 mr-10 w-48 bg-white rounded-md shadow-lg py-2">
              <button 
                onClick={() => {
                  navigate("/dashboard");
                }}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-300 w-full"
              >
                Profile
              </button>
              <button onClick={() => {
                navigate("/dashboard");
              }}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-300 w-full"
              >
                Settings
              </button>
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/");
                }}
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-300 w-full"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
