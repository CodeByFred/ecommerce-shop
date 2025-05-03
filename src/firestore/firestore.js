// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_FIRESTORE_API_KEY}`,
  authDomain: "nology-ecommerce-store.firebaseapp.com",
  projectId: "nology-ecommerce-store",
  storageBucket: "nology-ecommerce-store.firebasestorage.app",
  messagingSenderId: "130844024822",
  appId: "1:130844024822:web:85760fa8040c63e9c1f1d7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
