import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/themeContext"; // Theme context

const Home = () => {
  const { theme } = useTheme();
  const [dogImageUrl, setDogImageUrl] = useState(null);

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await fetch(
          "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1",
          {
            headers: { "x-api-key": "YOUR_API_KEY" },
          }
        );
        const result = await response.json();
        setDogImageUrl(result[0]?.url || "");
      } catch (error) {
        console.error("Error fetching dog image:", error);
      }
    };

    fetchDogImage();
  }, []);

  const heroStyles = {
    backgroundImage: `url(${dogImageUrl || "/fallback-image.jpg"})`,
  };

  return (
    <div>
      <section
        className={`relative w-full h-screen bg-cover bg-center ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
        style={heroStyles}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-4 text-white">
              Welcome to the Jacob Wildlife Centre
            </h1>
            <p className="text-lg mb-6 text-white">
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

      <section
        className={`py-16 text-center ${
          theme === "dark"
            ? "bg-gray-800 text-white"
            : "bg-green-100 text-black"
        }`}
      >
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Jacob Wildlife Centre is more than just a sanctuary; it is a haven for
          endangered species and a platform for wildlife conservation and
          education. By visiting our center, you actively support our mission to
          protect vulnerable animals, restore habitats, and promote coexistence
          between humans and wildlife.
        </p>
      </section>

      <section
        className={`py-16 text-center ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <h2 className="text-3xl font-bold mb-8">Quick Links</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <QuickLink
            theme={theme}
            title="Animals"
            description="Discover the amazing animals we protect and care for at the centre."
            link="/animals"
          />
          <QuickLink
            theme={theme}
            title="Events"
            description="Join us in our upcoming events and support our mission for wildlife preservation."
            link="/events"
          />
          <QuickLink
            theme={theme}
            title="Subscription"
            description="Become a member and get exclusive access to the wildlife center's updates and offers."
            link="/signUp"
          />
        </div>
      </section>
    </div>
  );
};

const QuickLink = ({ theme, title, description, link }) => (
  <div
    className={`${
      theme === "dark" ? "bg-green-600" : "bg-green-600"
    } text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300`}
  >
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <p className="text-lg mb-4">{description}</p>
    <Link
      to={link}
      className="text-yellow-400 hover:text-yellow-500 transition duration-300"
    >
      Learn More &rarr;
    </Link>
  </div>
);

export default Home;
