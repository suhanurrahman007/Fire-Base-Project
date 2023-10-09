// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAPkVULYO38cdrHLCCy7hc9nWmy-Q4Gbw",
    authDomain: "fire-base-a1307.firebaseapp.com",
    projectId: "fire-base-a1307",
    storageBucket: "fire-base-a1307.appspot.com",
    messagingSenderId: "101768181025",
    appId: "1:101768181025:web:0aab5dcef3b0e101c67a60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app