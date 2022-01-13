import { initializeApp } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB136Bs-cxhePh4G8cdnbVbYWdEJhKfavM",

  authDomain: "nnnetflix-1fa03.firebaseapp.com",

  projectId: "nnnetflix-1fa03",

  storageBucket: "nnnetflix-1fa03.appspot.com",

  messagingSenderId: "429984548654",

  appId: "1:429984548654:web:2f19f41688c3c35f699cbf",

  measurementId: "G-P3C584XLB3",
};

const app = initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
