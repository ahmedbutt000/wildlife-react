// File: src/context/ThemeContext.jsx
import React, { createContext, useState, useContext, useEffect } from "react";

// Create a context
const ThemeContext = createContext();

// Custom hook to use theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage if exists
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Toggle theme and save it in localStorage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save theme to localStorage
  };

  // Apply theme changes to the body element
  useEffect(() => {
    document.body.classList.remove(
      "bg-white",
      "text-black",
      "bg-black",
      "text-white"
    );
    if (theme === "light") {
      document.body.classList.add("bg-white", "text-black");
    } else {
      document.body.classList.add("bg-black", "text-white");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
