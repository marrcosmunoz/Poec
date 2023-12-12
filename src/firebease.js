// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsr3K2GxJIEBrdZxPrxRWN0yogdBG69aM",
  authDomain: "react-fb-auth-6704c.firebaseapp.com",
  projectId: "react-fb-auth-6704c",
  storageBucket: "react-fb-auth-6704c.appspot.com",
  messagingSenderId: "716728662561",
  appId: "1:716728662561:web:93514ec4380f818bd0c160",
  measurementId: "G-NSVY2S8DX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);