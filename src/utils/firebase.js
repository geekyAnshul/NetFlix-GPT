// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "netflix-gpt-4f6e5.firebaseapp.com",
  projectId: "netflix-gpt-4f6e5",
  storageBucket: "netflix-gpt-4f6e5.appspot.com",
  messagingSenderId: "567959571073",
  appId: "1:567959571073:web:9874695e36f982b05e5b80",
  measurementId: "G-J9EW3MJWV2"
};

// console.log('Firebase API Key:', process.env.REACT_APP_FIREBASE_API_KEY);

//Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
//const analytics = getAnalytics(app);

export const auth = getAuth();

