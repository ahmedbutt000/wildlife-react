import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/themeContext"; // Import the theme context

const Home = () => {
  const { theme } = useTheme(); // Access the current theme
  const [dogImageUrl, setDogImageUrl] = useState(""); // State for storing dog image URL

  useEffect(() => {
    // Fetch dog image from the API when the component is mounted
    const fetchDogImage = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "x-api-key": "YOUR_API_KEY", // Add your API key here
        },
      };

      try {
        const response = await fetch(
          "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1",
          requestOptions
        );
        const result = await response.json();
        setDogImageUrl(result[0]?.url); // Set the dog image URL from the API response
      } catch (error) {
        console.log("Error fetching dog image:", error);
      }
    };

    fetchDogImage(); // Call the function to fetch the dog image
  }, []); // Empty dependency array ensures this runs only once when the component is mounted

  return (
    <div>
      {/* Hero Section */}
      <section
        className={`relative w-full h-screen bg-cover bg-center ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
        style={{
          backgroundImage: `url(${dogImageUrl})`, // Use fetched dog image or fallback to lion image
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center">
          <div>
            <h1
              className={`text-5xl font-bold leading-tight mb-4 ${
                theme === "dark" ? "text-white" : "text-white"
              }`}
            >
              Welcome to the Jacob Wildlife Centre
            </h1>
            <p
              className={`text-lg mb-6 ${
                theme === "dark" ? "text-white" : "text-white"
              }`}
            >
              Join us in safeguarding wildlife and creating a sustainable future
              for generations to come!
            </p>
            <Link
              to="/animals"
              className="bg-yellow-400 text-black py-2 px-6 rounded-full text-lg hover:bg-yellow-500 transition duration-300"
            >
              Explore Animals
            </Link>
          </div>
        </div>
      </section>

      {/* Promotion Section */}
      {/* Introduction Section */}
      <section
        className={`py-16 text-center ${
          theme === "dark"
            ? "bg-gray-800 text-white"
            : "bg-green-100 text-black"
        }`}
      >
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p
          className={`text-lg text-gray-700 max-w-3xl mx-auto ${
            theme === "dark" ? "text-white" : "text-gray-700"
          }`}
        >
          Jacob Wildlife Centre is more than just a sanctuary; it is a haven for
          endangered species and a platform for wildlife conservation and
          education. By visiting our center, you actively support our mission to
          protect vulnerable animals, restore habitats, and promote coexistence
          between humans and wildlife.
        </p>
        <p
          className={`text-lg text-black max-w-3xl mx-auto mt-4 ${
            theme === "dark" ? "text-white" : "text-gray-700"
          }`}
        >
          Our goal is to inspire a deeper connection with nature and empower
          people to make a difference. Whether it's learning about majestic
          animals, participating in conservation workshops, or simply
          appreciating the beauty of wildlife, your involvement helps us create
          a sustainable future for generations to come.
        </p>
      </section>

      {/* Key Links Section */}
      <section
        className={`py-16 text-center ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <h2 className="text-3xl font-bold mb-8">Quick Links</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className={`${
              theme === "dark"
                ? "bg-green-600 text-white"
                : "bg-green-600 text-white"
            } p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300`}
          >
            <h3 className="text-2xl font-semibold mb-4">Animals</h3>
            <p className="text-lg mb-4">
              Discover the amazing animals we protect and care for at the
              centre.
            </p>
            <Link
              to="/animals"
              className={`${
                theme === "dark" ? "text-yellow-400" : "text-yellow-400"
              } hover:text-yellow-500 transition duration-300`}
            >
              Learn More &rarr;
            </Link>
          </div>
          <div
            className={`${
              theme === "dark"
                ? "bg-blue-600 text-white"
                : "bg-blue-600 text-white"
            } p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300`}
          >
            <h3 className="text-2xl font-semibold mb-4">Events</h3>
            <p className="text-lg mb-4">
              Join us in our upcoming events and support our mission for
              wildlife preservation.
            </p>
            <Link
              to="/events"
              className={`${
                theme === "dark" ? "text-yellow-400" : "text-yellow-400"
              } hover:text-yellow-500 transition duration-300`}
            >
              See Events &rarr;
            </Link>
          </div>
          <div
            className={`${
              theme === "dark"
                ? "bg-yellow-600 text-white"
                : "bg-yellow-600 text-white"
            } p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300`}
          >
            <h3 className="text-2xl font-semibold mb-4">Subscription</h3>
            <p className="text-lg mb-4">
              Become a member and get exclusive access to the wildlife center's
              updates and offers.
            </p>
            <Link
              to="/signUp"
              className={`${
                theme === "dark" ? "text-black" : "text-black"
              } hover:text-gray-700 transition duration-300`}
            >
              Subscribe Now &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
