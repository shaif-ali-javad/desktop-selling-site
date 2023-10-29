// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1D5D-xLKYTLZQ44tBlyRNzgyFKOs80QA",
  authDomain: "desktop-selling-site.firebaseapp.com",
  projectId: "desktop-selling-site",
  storageBucket: "desktop-selling-site.appspot.com",
  messagingSenderId: "851328534923",
  appId: "1:851328534923:web:d8cf8cec298c7d33f5878e",
  measurementId: "G-1FXX9BEHYP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
