import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBo_svIJSLZVGBiW-lf70cYWjekqS9cus8",
    authDomain: "athletic-app-26530.firebaseapp.com",
    projectId: "athletic-app-26530",
    storageBucket: "athletic-app-26530.appspot.com",
    messagingSenderId: "873051705775",
    appId: "1:873051705775:web:12e21c8527b0ffe31b9f5a",
    measurementId: "G-7XZPBRTDHV",
};

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }