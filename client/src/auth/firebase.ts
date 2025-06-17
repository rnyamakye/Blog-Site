// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJJ_ApgNA5DP8OxVhq4o__RGXKmCxs_Ww",
  authDomain: "blogwebapp-2cd97.firebaseapp.com",
  projectId: "blogwebapp-2cd97",
  storageBucket: "blogwebapp-2cd97.firebasestorage.app",
  messagingSenderId: "684814265442",
  appId: "1:684814265442:web:073bd6dca9ec22e08eb53b",
  measurementId: "G-75FKS21Q29"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
