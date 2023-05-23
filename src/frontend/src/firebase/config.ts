// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAy30JjXJDHeiljwaNPn1QwZ97pBGc2Hx0",
    authDomain: "safe-paws.firebaseapp.com",
    projectId: "safe-paws",
    storageBucket: "safe-paws.appspot.com",
    messagingSenderId: "1078883883461",
    appId: "1:1078883883461:web:529405ab3226a353fe13ac",
    measurementId: "G-9HQHVDRDCB"
  };

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );