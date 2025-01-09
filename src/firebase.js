// File: src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1uXd2efddRfCq8mcKebM3372jhN6F1Co",
  authDomain: "application2-daa8d.firebaseapp.com",
  projectId: "application2-daa8d",
  storageBucket: "application2-daa8d.firebasestorage.app",
  messagingSenderId: "52962535605",
  appId: "1:52962535605:web:47411e73b26d8ef2b1b6fc",
  measurementId: "G-MSMS3B4823",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
