// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcMGwD4Bg5tm2Iev3duzd-nO5V1S-5o30",
  authDomain: "next-practice-zoe.firebaseapp.com",
  projectId: "next-practice-zoe",
  storageBucket: "next-practice-zoe.appspot.com",
  messagingSenderId: "256967204016",
  appId: "1:256967204016:web:421cca7941a8fa9133ef75",
  measurementId: "G-DZJV8H2PBM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;


