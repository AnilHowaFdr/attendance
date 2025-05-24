// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9Pi90GQM37o6TX-VMcyskhVYrYEerMbU",
  authDomain: "attendance-6e9d0.firebaseapp.com",
  databaseURL: "https://attendance-6e9d0-default-rtdb.firebaseio.com",
  projectId: "attendance-6e9d0",
  storageBucket: "attendance-6e9d0.firebasestorage.app",
  messagingSenderId: "943058430257",
  appId: "1:943058430257:web:df4f55715b7204c1032810",
};

// Initialize Firebase
const appConfig = initializeApp(firebaseConfig);

export default appConfig;
