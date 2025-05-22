import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQ3IaQoLW1HB6eJx2WK4T5M5L58fF3ZQU",
  authDomain: "mocksession-7f4d3.firebaseapp.com",
  projectId: "mocksession-7f4d3",
  storageBucket: "mocksession-7f4d3.firebasestorage.app",
  messagingSenderId: "421124135712",
  appId: "1:421124135712:web:2602c4e5550a2ae8dad545",
  measurementId: "G-GG5TK6PQLJ",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
