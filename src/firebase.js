// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_e9sp50GeHsCLSaz6XeDMXiDiHZb2I9I",
  authDomain: "ds-authentication-db.firebaseapp.com",
  projectId: "ds-authentication-db",
  storageBucket: "ds-authentication-db.firebasestorage.app",
  messagingSenderId: "840945566418",
  appId: "1:840945566418:web:8134216170436f4303a30b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);