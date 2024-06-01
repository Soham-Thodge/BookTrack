import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDX5-O_xCuEaxUe7bjBByzbyu9VQyF3dmQ",
  authDomain: "booktrack-4dbe1.firebaseapp.com",
  projectId: "booktrack-4dbe1",
  storageBucket: "booktrack-4dbe1.appspot.com",
  messagingSenderId: "627823421809",
  appId: "1:627823421809:web:5fd208185502fa78776ed0",
  measurementId: "G-TVDLB327MS"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
