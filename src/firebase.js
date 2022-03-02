// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe35gpcrUgG5RWx9g0DJM6ysQi6rfXBRo",
  authDomain: "quora-clone-956b0.firebaseapp.com",
  projectId: "quora-clone-956b0",
  storageBucket: "quora-clone-956b0.appspot.com",
  messagingSenderId: "762778492215",
  appId: "1:762778492215:web:49b56369a5dace12454eb2",
  measurementId: "G-2KNJEBDK8S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {auth, provider};