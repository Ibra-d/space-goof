// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAodak8HZJNeHrx6vCpu4R91ZGdF-3VADY',
  authDomain: 'zinzin-cd658.firebaseapp.com',
  databaseURL:
    'https://zinzin-cd658-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'zinzin-cd658',
  storageBucket: 'zinzin-cd658.appspot.com',
  messagingSenderId: '228602186011',
  appId: '1:228602186011:web:f054ce151d281892966bbe',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword }
