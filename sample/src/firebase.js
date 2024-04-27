// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAGwI9uRWbjnUjlSt_Mu_82zTQbAQvLQ8",
  authDomain: "samplefile-e57ca.firebaseapp.com",
  projectId: "samplefile-e57ca",
  storageBucket: "samplefile-e57ca.appspot.com",
  messagingSenderId: "984013222192",
  appId: "1:984013222192:web:659eaf86003984fbf4d8f5",
  databaseURL:"https://samplefile-e57ca-default-rtdb.firebaseio.com",
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//  export const firebase=getFirestore(app);