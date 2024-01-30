// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-1528.firebaseapp.com",
  projectId: "mern-estate-1528",
  storageBucket: "mern-estate-1528.appspot.com",
  messagingSenderId: "477518255415",
  appId: "1:477518255415:web:9ea00c5619bf29cd4136b2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);