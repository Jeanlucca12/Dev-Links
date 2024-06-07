
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBUGdTKJGH2EQXEvxNSHudpb2rygGDYKG8",
  authDomain: "reactlinks-82b61.firebaseapp.com",
  projectId: "reactlinks-82b61",
  storageBucket: "reactlinks-82b61.appspot.com",
  messagingSenderId: "538361057591",
  appId: "1:538361057591:web:6df7e96f564dd82c834ab2"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export { auth, db };