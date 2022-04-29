// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAIOYZjbdv4CMggLHyjHgrozZKC2YWQOPM",
    authDomain: "cars-house-bd.firebaseapp.com",
    projectId: "cars-house-bd",
    storageBucket: "cars-house-bd.appspot.com",
    messagingSenderId: "380786850492",
    appId: "1:380786850492:web:2995d8cdeeba6d09f82eb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;