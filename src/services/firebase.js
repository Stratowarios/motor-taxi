// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFkbeiVYHth8vZ-ASkpqMRcyO4QOGt0gU",
  authDomain: "motortaxi-ee7a9.firebaseapp.com",
  projectId: "motortaxi-ee7a9",
  storageBucket: "motortaxi-ee7a9.firebasestorage.app",
  messagingSenderId: "883001270456",
  appId: "1:883001270456:web:b1c1c30839f511cbfcd44d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword };