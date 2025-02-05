// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACuWHrlw4sxGJlOIApHhj-Ii-wy0jaPsY",
  authDomain: "b10a10-visa-navigator.firebaseapp.com",
  projectId: "b10a10-visa-navigator",
  storageBucket: "b10a10-visa-navigator.firebasestorage.app",
  messagingSenderId: "853290558654",
  appId: "1:853290558654:web:66fb669bcec96d9890aaef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);