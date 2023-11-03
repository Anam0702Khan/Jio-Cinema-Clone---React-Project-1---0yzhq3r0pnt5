import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCeC28KLosmFxeLiAWKTdVl0qbYPne59H0",
  authDomain: "jio-clone.firebaseapp.com",
  projectId: "jio-clone",
  storageBucket: "jio-clone.appspot.com",
  messagingSenderId: "197995506165",
  appId: "1:197995506165:web:15121a674f2065a6c118bc"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app)
// export const db = firebase.firestore();
