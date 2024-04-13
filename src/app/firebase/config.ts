// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2VBjInT1XaQzUzjRUxbTg0UUs-hb-HeE",
  authDomain: "sumo-snacks.firebaseapp.com",
  projectId: "sumo-snacks",
  storageBucket: "sumo-snacks.appspot.com",
  messagingSenderId: "590980943349",
  appId: "1:590980943349:web:98a55882eb964765f024bc",
  measurementId: "G-CXGMQ8G34M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
