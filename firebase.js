// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNpUMuoKYb0OWvTrdqFAPPjjfTDpqlFlk",
  authDomain: "react-notes-f196a.firebaseapp.com",
  projectId: "react-notes-f196a",
  storageBucket: "react-notes-f196a.appspot.com",
  messagingSenderId: "1062381915159",
  appId: "1:1062381915159:web:f8e198ef2b6362e1002052"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
