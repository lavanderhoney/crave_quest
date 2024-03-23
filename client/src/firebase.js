// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBsFNWy7J56tRB2pRLzo9wMneyFtAGsiP8",
    authDomain: "crave-quest.firebaseapp.com",
    projectId: "crave-quest",
    storageBucket: "crave-quest.appspot.com",
    messagingSenderId: "513795782471",
    appId: "1:513795782471:web:c19891f8875fa4ec123e62",
    measurementId: "G-G7JQSXRTCQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);