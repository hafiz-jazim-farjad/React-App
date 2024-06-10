import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCY94d2M0SK15KTzPvEvCZBBPLc4-4uqjg",
  authDomain: "myfirstfirebaseapp-a64b1.firebaseapp.com",
  projectId: "myfirstfirebaseapp-a64b1",
  storageBucket: "myfirstfirebaseapp-a64b1.appspot.com",
  messagingSenderId: "669438340985",
  appId: "1:669438340985:web:aa2d8cfb2010b5af7909a8",
  measurementId: "G-NNDN6P7073"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
