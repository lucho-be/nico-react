 
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAguUi9zClcYaWLQFLeI-QT2k37b_TXbQs",
  authDomain: "appnico-f445d.firebaseapp.com",
  projectId: "appnico-f445d",
  storageBucket: "appnico-f445d.firebasestorage.app",
  messagingSenderId: "328244675032",
  appId: "1:328244675032:web:ec6561452e098ba13632ad",
  measurementId: "G-7E9BCBW5FW"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
