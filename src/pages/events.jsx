import React, { useEffect, useState } from "react";
import { useTheme } from "../context/themeContext"; // Import the theme context
import EventCard from "../components/eventCard"; // Import the EventCard component

const EventsPage = () => {
  const { theme } = useTheme(); // Get current theme from context
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from the JSON file
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/data/events.json"); // Ensure the correct path to your data
        const data = await response.json();
        setEvents(data.events);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events data:", error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={`mt-0 sm:mt-0 lg:mt-[72px] ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      } py-16 px-4`}
    >
      <h1
        className={`text-4xl font-extrabold text-center ${
          theme === "dark" ? "text-yellow-400" : "text-yellow-500"
        } mb-12`}
      >
        Upcoming Events
      </h1>

      {/* Event Categories */}
      {["Adults Only", "Families", "Children"].map((category) => (
        <section key={category} className="mb-16">
          <h2
            className={`text-3xl font-semibold text-center ${
              theme === "dark" ? "text-gray-300" : "text-gray-800"
            } mb-8`}
          >
            {category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {events
              .filter((event) => event.category === category)
              .map((event) => (
                <EventCard
                  key={event.id}
                  id={event.id}
                  title={event.title}
                  date={event.date}
                  category={event.category}
                />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default EventsPage;
