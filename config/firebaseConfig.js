// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "trandoanthuongcuoiky.firebaseapp.com",
  databaseURL: "https://trandoanthuongcuoiky-default-rtdb.firebaseio.com",
  projectId: "trandoanthuongcuoiky",
  storageBucket: "trandoanthuongcuoiky.appspot.com",
  messagingSenderId: "948432089677",
  appId: "1:948432089677:web:15642ba0f96ad54f7be204"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)