// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZE-zFeHARQZKmAx0scKTDDuxx4tH2ua8",
  authDomain: "flashcardsaas-e7132.firebaseapp.com",
  projectId: "flashcardsaas-e7132",
  storageBucket: "flashcardsaas-e7132.appspot.com",
  messagingSenderId: "51901546669",
  appId: "1:51901546669:web:0605db06ac3141007a8624",
  measurementId: "G-5W78XE3GC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}