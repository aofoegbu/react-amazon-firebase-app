// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDApz4Amns9QiqrCI_laGfQLQ1Q2-Xy7is",
  authDomain: "ogelo-react--clone.firebaseapp.com",
  projectId: "ogelo-react--clone",
  storageBucket: "ogelo-react--clone.appspot.com",
  messagingSenderId: "35542597063",
  appId: "1:35542597063:web:e063e2d7afaaed76ceede2",
  measurementId: "G-NE6GDYXJLM",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
