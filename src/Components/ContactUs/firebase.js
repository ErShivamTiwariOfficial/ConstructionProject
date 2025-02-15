// src/firebase.js
// import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyCzm7fiHxcEUqGsDd2FzMlthArOeJUM-lM",
//   authDomain: "jhontraktor.firebaseapp.com",
//   projectId: "jhontraktor",
//   storageBucket: "jhontraktor.firebasestorage.app",
//   messagingSenderId: "667121759203",
//   appId: "1:667121759203:web:85569e8cec6571348fe6d6"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyDHxBZAd9IcZG2R_y5TtLlSnSm_qh05o8c",
  authDomain: "apanaconstruction-953b1.firebaseapp.com",
  projectId: "apanaconstruction-953b1",
  storageBucket: "apanaconstruction-953b1.firebasestorage.app",
  messagingSenderId: "590137040490",
  appId: "1:590137040490:web:25847a6f5e2dc7bc1b3413",
  measurementId: "G-WH3BP1T7DF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getAnalytics(app);



export { db };
