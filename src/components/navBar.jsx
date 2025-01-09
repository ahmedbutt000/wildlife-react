import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ToggleTheme from "./themeToggle"; // Import the ToggleTheme component

const Navbar = () => {
  const navigate = useNavigate();

  // Check if the user is logged in (i.e., authToken exists)
  const isLoggedIn = !!localStorage.getItem("authToken");

  const handleLogout = () => {
    // Remove the token from storage
    localStorage.removeItem("authToken");
    // Redirect to login page
    navigate("/login");
  };

  return (
    <nav className="bg-green-600 p-4 flex justify-between items-center font-sans">
      <div className="text-white text-2xl font-bold italic">
        Jacob Wildlife Centre
      </div>
      <div className="flex gap-6 items-center">
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
          <>
            <Link
              to="/signup"
              className="text-white hover:text-yellow-400 active:text-red-600 transition-colors duration-300"
            >
              Register
            </Link>
          </>
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
    </nav>
  );
};

export default Navbar;
