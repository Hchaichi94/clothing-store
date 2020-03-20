import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA8jX3mzTeTotVyOmoHzFuh2VISvRfRsf4",
    authDomain: "clothing-store-8f6a1.firebaseapp.com",
    databaseURL: "https://clothing-store-8f6a1.firebaseio.com",
    projectId: "clothing-store-8f6a1",
    storageBucket: "clothing-store-8f6a1.appspot.com",
    messagingSenderId: "997817256690",
    appId: "1:997817256690:web:476e1d09dfb04ee8e95e6b",
    measurementId: "G-S96DJZC277"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;