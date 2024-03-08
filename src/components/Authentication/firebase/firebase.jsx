import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDUCn_5XxXXycWCEdDdz0Rk5UublCHRAhs",
  authDomain: "scriptquiz-cc81e.firebaseapp.com",
  projectId: "scriptquiz-cc81e",
  storageBucket: "scriptquiz-cc81e.appspot.com",
  messagingSenderId: "212748073817",
  appId: "1:212748073817:web:cd1f777065114729f7ea48",
  measurementId: "G-2MBWBRBQ6L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export {app, auth, db};