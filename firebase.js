// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn0d2lvKfJAOkHjwHuk0PrGXG49HftH8o",
  authDomain: "doctor-q-clinic.firebaseapp.com",
  projectId: "doctor-q-clinic",
  storageBucket: "doctor-q-clinic.appspot.com",
  messagingSenderId: "401838390539",
  appId: "1:401838390539:web:090477cb5f6c5f8c24f60e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
