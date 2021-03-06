import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCLW_KrChwE6hYKqortcP9WrnyU6SVMhtQ",
    authDomain: "login-poke.firebaseapp.com",
    projectId: "login-poke",
    storageBucket: "login-poke.appspot.com",
    messagingSenderId: "28738529642",
    appId: "1:28738529642:web:48d190bd49157d53e4dd13"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const autenticacion = firebase.auth()
  const db = firebase.firestore()
  const almacenamiento = firebase.storage()

  export {autenticacion, firebase, db, almacenamiento}