// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYwIB_Ij4y_GWL1PX5fuDIH0z3Cn4ME8o",
  authDomain: "business-directory-ed795.firebaseapp.com",
  projectId: "business-directory-ed795",
  storageBucket: "business-directory-ed795.appspot.com",
  messagingSenderId: "962465962925",
  appId: "1:962465962925:web:293f7e1ab631eba1cb1f24",
  measurementId: "G-KEYTK280HE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);
//const analytics = getAnalytics(app);