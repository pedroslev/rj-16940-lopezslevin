// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDdyUN4c_zneF-A4rU3fcmnp4gytuZthX8",
  authDomain: "devbar-react.firebaseapp.com",
  projectId: "devbar-react",
  storageBucket: "devbar-react.appspot.com",
  messagingSenderId: "379749534531",
  appId: "1:379749534531:web:09d4c2e2b388dd60233df6",
  measurementId: "G-2HZ6KEB5DP"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const getFireebase = () => app;
export const getFirestore = () => firebase.firestore(app)