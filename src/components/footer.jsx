import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-6 text-center">
      <p>&copy; 2025 Jacob Wildlife Centre. All rights reserved.</p>
      <div className="mt-4">
        <a
          href="#"
          className="text-yellow-400 hover:text-yellow-500 transition duration-300 mx-2"
        >
          Facebook
        </a>
        <a
          href="#"
          className="text-yellow-400 hover:text-yellow-500 transition duration-300 mx-2"
        >
          Instagram
        </a>
        <a
          href="#"
          className="text-yellow-400 hover:text-yellow-500 transition duration-300 mx-2"
        >
          Twitter
        </a>
      </div>
    </footer>
  );
};

export default Footer;
