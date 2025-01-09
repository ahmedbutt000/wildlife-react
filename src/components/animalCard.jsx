import React from "react";
import Button from "./button";
import { useTheme } from "../context/themeContext"; // Assuming you have a theme context to provide the current theme

const AnimalCard = ({ name, image, description, id }) => {
  const { theme } = useTheme(); // Access the current theme

  return (
    <div
      className={`max-w-sm rounded overflow-hidden shadow-lg ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <img className="w-full h-64 object-cover" src={image} alt={name} />
      <div className="px-6 py-4">
        <h3
          className={`font-bold text-xl mb-2 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          {name}
        </h3>
        <p
          className={`text-base mb-4 ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {description}
        </p>
        <Button label="View Details" link={`/animals/${id}`} />
      </div>
    </div>
  );
};

export default AnimalCard;
