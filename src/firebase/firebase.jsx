// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUCn_5XxXXycWCEdDdz0Rk5UublCHRAhs",
  authDomain: "scriptquiz-cc81e.firebaseapp.com",
  projectId: "scriptquiz-cc81e",
  storageBucket: "scriptquiz-cc81e.appspot.com",
  messagingSenderId: "212748073817",
  appId: "1:212748073817:web:cd1f777065114729f7ea48",
  measurementId: "G-2MBWBRBQ6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export {app, auth, db};