import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get route params
import { useTheme } from "../context/themeContext"; // Import theme context

const EventDetailsPage = () => {
  const { theme } = useTheme(); // Access the current theme
  const { eventId } = useParams(); // Get event ID from URL
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch event details based on the eventId
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch("/data/events.json"); // Ensure the correct path
        const data = await response.json();
        const selectedEvent = data.events.find(
          (e) => e.id === parseInt(eventId)
        );
        setEvent(selectedEvent);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching event details:", error);
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  if (loading) {
    return (
      <div
        className={`text-center text-xl ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
        } min-h-screen flex items-center justify-center`}
      >
        Loading event details...
      </div>
    );
  }

  if (!event) {
    return (
      <div
        className={`text-center text-xl ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
        } min-h-screen flex items-center justify-center`}
      >
        Event not found!
      </div>
    );
  }

  return (
    <div
      className={`mt-0 sm:mt-0 lg:mt-[72px] py-16 px-8 min-h-screen ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
      }`}
    >
      <h1
        className={`text-4xl font-extrabold text-center mb-12 ${
          theme === "dark" ? "text-green-400" : "text-green-600"
        }`}
      >
        {event.title}
      </h1>

      <section
        className={`p-8 rounded-lg shadow-lg max-w-4xl mx-auto ${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        <h2
          className={`text-2xl font-semibold mb-4 ${
            theme === "dark" ? "text-gray-300" : "text-gray-800"
          }`}
        >
          Category: {event.category}
        </h2>
        <p
          className={`text-sm mb-4 ${
            theme === "dark" ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Date: {event.date}
        </p>
        <p className="text-lg">{event.description}</p>
      </section>
    </div>
  );
};

export default EventDetailsPage;
