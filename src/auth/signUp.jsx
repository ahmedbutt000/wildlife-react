import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useTheme } from "../context/themeContext"; // Import the theme context

const Signup = () => {
  const { theme } = useTheme(); // Access the current theme

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [dogImage, setDogImage] = useState(null); // For storing the dog image URL
  const [fetchError, setFetchError] = useState(null); // For storing errors in fetching the image

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful!");
    } catch (err) {
      setError(err.message);
    }
  };

  // Fetch random dog image when component mounts
  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await fetch(
          "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1"
        );
        const result = await response.json();
        setDogImage(result[0]?.url); // Set the dog image URL
      } catch (error) {
        setFetchError("Error fetching the dog image.");
      }
    };

    fetchDogImage();
  }, []); // Empty array ensures this runs once when the component mounts

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
      } min-h-screen flex flex-col justify-center items-center`}
    >
      <div
        className={`p-8 rounded-lg shadow-lg w-full max-w-md ${
          theme === "dark" ? "bg-gray-900" : "bg-white"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-center text-3xl font-extrabold text-yellow-600 mb-6">
            Register
          </h2>
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 text-black"
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 text-black"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-600"
          >
            Register
          </button>
        </form>

        {/* Dog image display */}
        <div className="mt-6 text-center">
          {fetchError && <p className="text-red-500">{fetchError}</p>}
          {dogImage ? (
            <img
              src={dogImage}
              alt="Random Dog"
              style={{ width: "300px", height: "auto", borderRadius: "8px" }}
            />
          ) : (
            <p>Loading dog image...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
