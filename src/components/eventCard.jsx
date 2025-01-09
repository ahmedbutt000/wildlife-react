import React from "react";
import { useNavigate } from "react-router-dom";

const EventCard = ({ id, title, date, category }) => {
  const navigate = useNavigate();

  // Handle "Book Now" button
  const handleBookNow = () => {
    const wantsDiscount = window.confirm(
      "Do you want to apply for a discount voucher?"
    );
    if (wantsDiscount) {
      navigate("/voucher"); // Redirect to the vouchers page
    } else {
      alert("You can proceed without a discount.");
    }
  };

  // Handle "Details" button
  const handleDetails = () => {
    navigate(`/event/${id}`); // Navigate to the event details page with the event id
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">Date: {date}</p>
        <p className="text-sm text-gray-500 mb-4">Category: {category}</p>

        <div className="flex gap-4">
          <button
            onClick={handleDetails}
            className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg w-full hover:bg-blue-600 transition duration-300"
          >
            Details
          </button>
          <button
            onClick={handleBookNow}
            className="bg-yellow-500 text-white py-2 px-6 rounded-full text-lg w-full hover:bg-yellow-600 transition duration-300"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
