// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0XEAtRni6X3RN9JYD2jbV81v8c2uj2IM",
  authDomain: "alwaleed-70cdf.firebaseapp.com",
  projectId: "alwaleed-70cdf",
  storageBucket: "alwaleed-70cdf.firebasestorage.app",
  messagingSenderId: "1035342290123",
  appId: "1:1035342290123:web:c6062909abd45a00874f4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)