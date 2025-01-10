import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ToggleTheme from "./themeToggle";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isLoggedIn = !!localStorage.getItem("authToken");

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <nav
      className={`bg-green-600 p-4 flex justify-between items-center font-sans 
      md:fixed md:top-0 md:left-0 md:w-full md:z-50`}
    >
      <div className="text-white text-2xl font-bold italic ">
        Jacob Wildlife Centre
      </div>
      <div className="flex items-center">
        <button
          className="text-white hover:text-yellow-400 active:text-red-600 transition-colors duration-300 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
        <div
          className={`md:flex ${
            isMenuOpen ? "flex" : "hidden"
          } flex-col md:flex-row gap-6 items-center`}
        >
          <Link
            to="/"
            className="text-white hover:text-yellow-400 active:text-red-600 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/animals"
            className="text-white hover:text-yellow-400 active:text-red-600 transition-colors duration-300"
          >
            Animals
          </Link>
          <Link
            to="/events"
            className="text-white hover:text-yellow-400 active:text-red-600 transition-colors duration-300"
          >
            Events
          </Link>
          {!isLoggedIn ? (
            <Link
              to="/signup"
              className="text-white hover:text-yellow-400 active:text-red-600 transition-colors duration-300"
            >
              Register
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="text-white hover:text-yellow-400 active:text-red-600 transition-colors duration-300"
            >
              Logout
            </button>
          )}
          <div className="ml-6">
            <ToggleTheme />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
