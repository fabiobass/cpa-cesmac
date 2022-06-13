import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfxYzw4AWU7RlcV0cDkxPV5_Clc7D9XsM",
  authDomain: "cesmac01-aula.firebaseapp.com",
  projectId: "cesmac01-aula",
  storageBucket: "cesmac01-aula.appspot.com",
  messagingSenderId: "496122998521",
  appId: "1:496122998521:web:fc0d907fb9ce6db61cbc28",
  measurementId: "G-X61MECP0W6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
