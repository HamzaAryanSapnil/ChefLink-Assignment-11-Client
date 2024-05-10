// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2p-CC3IP_GG_wprcz4pDSGHxc96tOZM8",
  authDomain: "cheflink-assignment-11.firebaseapp.com",
  projectId: "cheflink-assignment-11",
  storageBucket: "cheflink-assignment-11.appspot.com",
  messagingSenderId: "970919885121",
  appId: "1:970919885121:web:eacd3c2eefef790de349c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;