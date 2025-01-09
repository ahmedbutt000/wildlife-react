// File: src/components/Button.jsx
import React from "react";
import { Link } from "react-router-dom";

const Button = ({ label, link }) => {
  return (
    <Link to={link}>
      <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200">
        {label}
      </button>
    </Link>
  );
};

export default Button;
