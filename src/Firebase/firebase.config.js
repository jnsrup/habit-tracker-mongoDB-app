// src/firebase/firebase.config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHNve7B-rBixNbF_PDg4x7OOVvCnB9Wb8",
  authDomain: "habit-traker-auth.firebaseapp.com",
  projectId: "habit-traker-auth",
  storageBucket: "habit-traker-auth.firebasestorage.app",
  messagingSenderId: "692564903504",
  appId: "1:692564903504:web:ab519aa476f3717c0d7355",
  measurementId: "G-9265WKX9VZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;