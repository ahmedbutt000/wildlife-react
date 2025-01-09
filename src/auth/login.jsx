// File: src/auth/login.js
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useTheme } from "../context/themeContext"; // Import the theme context
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { theme } = useTheme(); // Access the current theme
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const token = await userCredential.user.getIdToken(); // Get Firebase token
      localStorage.setItem("authToken", token); // Store token in localStorage
      alert("Login successful!");
      navigate("/voucher"); // Redirect to VoucherPage
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      } min-h-screen flex justify-center items-center`}
    >
      <div
        className={`${
          theme === "dark" ? "bg-gray-900" : "bg-white"
        } p-8 rounded-lg shadow-lg w-full max-w-md`}
      >
        <h2 className="text-center text-3xl font-extrabold text-yellow-600 mb-6">
          Login
        </h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleLogin}>
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
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-white-600 dark:text-white-400">
            Dont have an account?{" "}
            <a
              href="/signUp"
              className="text-yellow-600 hover:underline dark:text-yellow-500"
            >
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
