// File: src/components/ToggleTheme.jsx
import React from "react";
import { useTheme } from "../context/themeContext"; // Import the useTheme hook

const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme(); // Get the current theme and toggle function

  return (
    <button
      onClick={toggleTheme}
      className="text-white px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700"
    >
      {theme === "light" ? "🌙 Dark Mode" : "🌞 Light Mode"}
    </button>
  );
};

export default ToggleTheme;
