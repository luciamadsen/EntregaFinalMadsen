// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATXlcZ5OfUUsgA3jHCT2oHiZ8HSwoHpug",
  authDomain: "bayside-team-prueba.firebaseapp.com",
  projectId: "bayside-team-prueba",
  storageBucket: "bayside-team-prueba.appspot.com",
  messagingSenderId: "926150233419",
  appId: "1:926150233419:web:be4c3fa7cd132db1ddacce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);