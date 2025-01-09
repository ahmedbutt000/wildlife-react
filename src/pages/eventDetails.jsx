import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get route params

const EventDetailsPage = () => {
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
    return <div>Loading event details...</div>;
  }

  if (!event) {
    return <div>Event not found!</div>;
  }

  return (
    <div className="bg-gray-50 py-16 px-8">
      <h1 className="text-4xl font-extrabold text-center text-green-600 mb-12">
        {event.title}
      </h1>

      <section className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Category: {event.category}
        </h2>
        <p className="text-sm text-gray-500 mb-4">Date: {event.date}</p>
        <p className="text-lg text-gray-700">{event.description}</p>
      </section>
    </div>
  );
};

export default EventDetailsPage;
