// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARj3YfA0AomJaQ7Xdm4nhkzG44wWGYtZg",
  authDomain: "convict-conditional.firebaseapp.com",
  projectId: "convict-conditional",
  storageBucket: "convict-conditional.appspot.com",
  messagingSenderId: "482053055569",
  appId: "1:482053055569:web:34b8fcf91b6431606b4470"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);