import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALvtYRgJ_I6kVF55oU_uN8P9SQIO38ui4",
  authDomain: "iestpchupa-2023.firebaseapp.com",
  projectId: "iestpchupa-2023",
  storageBucket: "iestpchupa-2023.appspot.com",
  messagingSenderId: "639041482005",
  appId: "1:639041482005:web:ce3f47d8c255cb56c9cd1c"

};

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { db, auth };