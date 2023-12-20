import { initializeApp } from 'firebase/app';
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyClGIcQCdz_Oxk7GbhjKP9cQSOdFTGXh10",
    authDomain: "yumdatabase.firebaseapp.com",
    projectId: "yumdatabase",
    storageBucket: "yumdatabase.appspot.com",
    messagingSenderId: "781519142540",
    appId: "1:781519142540:web:d53425eb5f6aefb4ddc5a9",
    measurementId: "G-KBCQT3H502"
};


// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);