// Import the functions you need from the SDKs you need
import { getDatabase } from "firebase/database"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIMfXDehkyZIXPUJ8vpWMfwwy7NsO_K_Y",
  authDomain: "first-registration-form.firebaseapp.com",
  databaseURL: "https://first-registration-form-default-rtdb.firebaseio.com",
  projectId: "first-registration-form",
  storageBucket: "first-registration-form.appspot.com",
  messagingSenderId: "526406227625",
  appId: "1:526406227625:web:6c8dcd867b7bb728927bb8",
  measurementId: "G-HQ6MCCN1FB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);


export const database = getDatabase(app);