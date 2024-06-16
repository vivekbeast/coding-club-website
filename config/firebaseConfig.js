// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,

  authDomain: "syntaxsociety-59540.firebaseapp.com",

  projectId: "syntaxsociety-59540",

  storageBucket: "syntaxsociety-59540.appspot.com",

  messagingSenderId: "721661463436",

  appId: "1:721661463436:web:70864c9de50d9d459ce4a9",

  measurementId: "G-7GKK0CX7RN"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);