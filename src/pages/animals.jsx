import React, { useEffect, useState } from "react";
import AnimalCard from "../components/animalCard";
import { useTheme } from "../context/themeContext"; // Import theme context

const Animals = () => {
  const { theme } = useTheme(); // Access the current theme
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from the JSON file
  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await fetch("/data/animals.json");
        const data = await response.json();
        setAnimals(data.wildAnimals);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching animals data:", error);
        setLoading(false);
      }
    };

    fetchAnimals();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={`py-8 px-4 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h1
        className={`text-4xl font-bold text-center mb-8 ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        British animals at the Wildlife Centre
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {animals.map((animal, index) => (
          <AnimalCard
            key={index}
            id={index} // Use the index as a unique ID
            name={animal.name}
            image={animal.image}
            theme={theme} // Pass theme to AnimalCard component
          />
        ))}
      </div>
    </div>
  );
};

export default Animals;
