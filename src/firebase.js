import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyApaNXGuAhJTkiFizeYj1O2CvsLrHFLbBo",
    authDomain: "puertomeraki-67b52.firebaseapp.com",
    projectId: "puertomeraki-67b52",
    storageBucket: "puertomeraki-67b52.appspot.com",
    messagingSenderId: "103678260574",
    appId: "1:103678260574:web:6940cba048bd0a4d4acbcf"
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}