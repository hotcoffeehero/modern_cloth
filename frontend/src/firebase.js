import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCgoB34a2eN3Uf-MruUPHVAPft6gThVsok",
    authDomain: "modern-cloth.firebaseapp.com",
    projectId: "modern-cloth",
    storageBucket: "modern-cloth.appspot.com",
    messagingSenderId: "961259277042",
    appId: "1:961259277042:web:e923dd3fdb19fd41b9de6b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth()
  export const googleAuthProvider = new firebase.auth.googleAuthProvider()