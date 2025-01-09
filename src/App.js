// File: src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navBar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Animals from "./pages/animals";
import AnimalDetails from "./pages/animalDetails";
import Events from "./pages/events";
import EventDetailsPage from "./pages/eventDetails";
import DiscountVoucher from "./pages/discountVouchers";
import Login from "./auth/login";
import Signup from "./auth/signUp";
import ThemeProvider from "./context/themeContext";

function App() {
  return (
    // Wrap your app with the ThemeProvider
    <ThemeProvider>
      <div className="min-h-screen transition-all ease-in-out duration-300">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/animals" element={<Animals />} />
            <Route path="/animals/:id" element={<AnimalDetails />} />
            <Route path="/events" element={<Events />} />
            <Route path="/event/:eventId" element={<EventDetailsPage />} />
            <Route path="/voucher" element={<DiscountVoucher />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
