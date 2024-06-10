import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCY94d2M0SK15KTzPvEvCZBBPLc4-4uqjg",
    authDomain: "myfirstfirebaseapp-a64b1.firebaseapp.com",
    projectId: "myfirstfirebaseapp-a64b1",
    storageBucket: "myfirstfirebaseapp-a64b1.appspot.com",
    messagingSenderId: "669438340985",
    appId: "1:669438340985:web:a21b548749b6be687909a8",
    measurementId: "G-2832YC2FS6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);