import firebase from "firebase/compat/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from './config';

if (!firebase.apps.length)
    firebase.initializeApp(firebaseConfig);
else
    firebase.app();


const auth = getAuth();
const provider = {
    google: new GoogleAuthProvider(),
}

export { auth, provider, signInWithPopup };