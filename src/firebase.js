import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7OXmJm5sF4xabhm55Tn8ETF77UbwSyTA",
  authDomain: "fishingdiary-87a66.firebaseapp.com",
  projectId: "fishingdiary-87a66",
  storageBucket: "fishingdiary-87a66.appspot.com",
  messagingSenderId: "1039256330972",
  appId: "1:1039256330972:web:06be54efbe4b767c8f8a19"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();