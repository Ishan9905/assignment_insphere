// Import the functions you need from the SDKs you need
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { Platform } from 'react-native';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXwlTI5s--Q5moZo5x7dV9ylBdQprvm9c",
  authDomain: "assignment-ccd2d.firebaseapp.com",
  projectId: "assignment-ccd2d",
  storageBucket: "assignment-ccd2d.appspot.com",
  messagingSenderId: "679064732492",
  appId: "1:679064732492:web:0b522d04b30f1eacbac5e9",
  measurementId: "G-2KY1PX60DQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

let auth;
if (Platform.OS === 'web') {
  auth = initializeAuth(app);
} else {
  auth = initializeAuth(app, { persistence: getReactNativePersistence(AsyncStorage) });
}
export { auth };
  