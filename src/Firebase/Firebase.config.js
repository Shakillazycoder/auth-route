// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7SafLsdWEmXIcjnwQ3Xjm8qC-UEXV_GY",
  authDomain: "authentication-route-159f8.firebaseapp.com",
  projectId: "authentication-route-159f8",
  storageBucket: "authentication-route-159f8.appspot.com",
  messagingSenderId: "1088512765364",
  appId: "1:1088512765364:web:67001de5cd250c1fe416e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;