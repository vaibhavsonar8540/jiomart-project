// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz_3T1VZ_bfVliAShli6XPJqNNjTskjew",
  authDomain: "jiomartproject.firebaseapp.com",
  projectId: "jiomartproject",
  storageBucket: "jiomartproject.firebasestorage.app",
  messagingSenderId: "864978416620",
  appId: "1:864978416620:web:f68a7f0a9bb9373590c6c9",
  measurementId: "G-QC0TE5H0YK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);