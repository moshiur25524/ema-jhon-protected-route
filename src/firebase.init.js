// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRBA3iyNAMVmzfIMOQEMf93KmuLpKncUA",
  authDomain: "ema-john-firebase-auth-e96d5.firebaseapp.com",
  projectId: "ema-john-firebase-auth-e96d5",
  storageBucket: "ema-john-firebase-auth-e96d5.appspot.com",
  messagingSenderId: "107687532730",
  appId: "1:107687532730:web:8c2f5946cc48227e250a83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;