// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfcOZIg7b8R3qWNdmnWGUe9E2anmxzFs8",
  authDomain: "alwaleedorganization-f2f9b.firebaseapp.com",
  projectId: "alwaleedorganization-f2f9b",
  storageBucket: "alwaleedorganization-f2f9b.firebasestorage.app",
  messagingSenderId: "872580257484",
  appId: "1:872580257484:web:ec37ae48ac84fa9ae6d469",
  measurementId: "G-Q8Q2TJRD2P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();
