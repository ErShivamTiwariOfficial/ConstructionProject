
// src/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// import { getFirestore } from "firebase/firestore";
// import { initializeApp } from "firebase/app"
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzm7fiHxcEUqGsDd2FzMlthArOeJUM-lM",
  authDomain: "jhontraktor.firebaseapp.com",
  projectId: "jhontraktor",
  storageBucket: "jhontraktor.firebasestorage.app",
  messagingSenderId: "667121759203",
  appId: "1:667121759203:web:85569e8cec6571348fe6d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measureme

// Initialize Firebase Anal

const db = getAnalytics(app);
export { db };