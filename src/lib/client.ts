import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA857eCt-gmR2ZN3iUNuZhbYlCl-OddDJo",
  authDomain: "darsdemo-2d093.firebaseapp.com",
  projectId: "darsdemo-2d093",
  storageBucket: "darsdemo-2d093.appspot.com",
  messagingSenderId: "246536397828",
  appId: "1:246536397828:web:d25cdb4ed79c1c9c9c0151",
  measurementId: "G-XTDFB40W6D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
