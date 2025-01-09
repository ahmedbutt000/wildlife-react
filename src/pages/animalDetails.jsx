import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const AnimalDetails = () => {
  const { id } = useParams();
  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnimalDetails = async () => {
      try {
        const response = await fetch("/data/animals.json");
        const data = await response.json();
        setAnimal(data.wildAnimals[id]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching animal details:", error);
        setLoading(false);
      }
    };

    fetchAnimalDetails();
  }, [id]);

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  if (!animal) {
    return <div className="text-center text-xl">Animal not found!</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <img
            className="w-full h-64 object-cover rounded-t-lg"
            src={animal.image}
            alt={animal.name}
            style={{ objectFit: "cover", height: "300px" }}
          />
          <div className="absolute top-0 left-0 bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">{animal.name}</h1>
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <p className="text-lg text-gray-700">{animal.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetails;
