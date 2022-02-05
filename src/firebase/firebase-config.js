import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "short-url-1529a.firebaseapp.com",
  projectId: "short-url-1529a",
  storageBucket: "short-url-1529a.appspot.com",
  messagingSenderId: "546433568298",
  appId: process.env.REACT_APP_FIREBASE_API_ID,
  measurementId: "G-KY30JVWPLK",
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
