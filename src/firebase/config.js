// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, listAll } from "firebase/storage";

//import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwFtpdb9_9fr_oWxgi1FT-XUjP662c1JE",
  authDomain: "fsw-http.firebaseapp.com",
  databaseURL: "https://fsw-http-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fsw-http",
  storageBucket: "fsw-http.appspot.com",
  messagingSenderId: "819782840713",
  appId: "1:819782840713:web:312f5a5c7843240bcab158",
  measurementId: "G-MQFWT4160K"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app)
//const storage = getStorage(app)
//const firestore = getFirestore(app)


export { firebaseConfig };


//export { storage, firestore };