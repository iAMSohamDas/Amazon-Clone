import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD-d1G0Upe_Us92lElSaPFINWSfBxD4Hb4",
    authDomain: "challenge-229b6.firebaseapp.com",
    projectId: "challenge-229b6",
    storageBucket: "challenge-229b6.appspot.com",
    messagingSenderId: "541049241379",
    appId: "1:541049241379:web:c824c9ca5b30e6bcb1d696",
    measurementId: "G-EWG3Q1C1DM"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };