// File: src/pages/discountVouchers.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/themeContext"; // Import the theme context

const VoucherPage = () => {
  const { theme } = useTheme(); // Access the current theme
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [vouchers, setVouchers] = useState([
    {
      code: "SAVE20",
      description: "Save 20% on your next purchase",
      expirationDate: "2025-12-31",
      redeemed: false,
    },
    {
      code: "FREESHIP",
      description: "Free shipping on orders over $50",
      expirationDate: "2025-06-30",
      redeemed: false,
    },
    {
      code: "BUY1GET1",
      description: "Buy 1 Get 1 Free on selected items",
      expirationDate: "2025-08-15",
      redeemed: false,
    },
  ]);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
    } else {
      alert("You need to log in to redeem vouchers.");
      navigate("/login"); // Redirect to Login page if not authenticated
    }
  }, [navigate]);

  const handleRedeem = (voucherCode) => {
    if (!isAuthenticated) {
      alert("Please log in to redeem vouchers.");
      navigate("/login");
      return;
    }

    setVouchers((prevVouchers) =>
      prevVouchers.map((voucher) =>
        voucher.code === voucherCode ? { ...voucher, redeemed: true } : voucher
      )
    );
    alert(`Voucher ${voucherCode} redeemed!`);
  };

  return (
    <div
      className={`mt-0 sm:mt-0 lg:mt-[72px]  ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      } min-h-screen flex justify-center items-center p-6`}
    >
      <div
        className={`${
          theme === "dark" ? "bg-gray-900" : "bg-white"
        } p-8 rounded-lg shadow-lg w-full max-w-3xl`}
      >
        <h2 className="text-center text-3xl font-extrabold text-yellow-600 mb-6">
          Vouchers
        </h2>

        <div>
          {vouchers.length === 0 ? (
            <p className="text-center text-lg text-gray-500">
              No vouchers available
            </p>
          ) : (
            <div>
              {vouchers.map((voucher) => (
                <div
                  key={voucher.code}
                  className="mb-6 p-4 border rounded-lg dark:border-gray-600"
                >
                  <h3 className="text-xl font-semibold text-yellow-600">
                    {voucher.code}
                  </h3>
                  <p className="text-gray dark:text-white mb-2">
                    {voucher.description}
                  </p>
                  <p className="text-sm text-grey dark:text-white">
                    Expiration Date: {voucher.expirationDate}
                  </p>
                  <button
                    onClick={() => handleRedeem(voucher.code)}
                    disabled={voucher.redeemed}
                    className={`mt-4 px-4 py-2 rounded-lg font-semibold ${
                      voucher.redeemed
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-yellow-600 text-white hover:bg-yellow-700 focus:outline-none"
                    }`}
                  >
                    {voucher.redeemed ? "Redeemed" : "Redeem"}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VoucherPage;
