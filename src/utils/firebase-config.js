import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB6hHJcVdISE8uKKopyGGFPwB5bL3VNrmc",
  authDomain: "react-netflix-clone-57763.firebaseapp.com",
  projectId: "react-netflix-clone-57763",
  storageBucket: "react-netflix-clone-57763.firebasestorage.app",
  messagingSenderId: "503738286442",
  appId: "1:503738286442:web:addc0114e4045bec3a6513",
  measurementId: "G-0D9LQRW9MW"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);