// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBecmuFwL6iyjmxH--SJQ3DUgQyD8smdUc",
  authDomain: "online-music-app-12694.firebaseapp.com",
  databaseURL: "https://online-music-app-12694-default-rtdb.firebaseio.com",
  projectId: "online-music-app-12694",
  storageBucket: "online-music-app-12694.firebasestorage.app",
  messagingSenderId: "413328159810",
  appId: "1:413328159810:web:292b6c193abc2c24f4e9db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dbFirebase = getDatabase(app);