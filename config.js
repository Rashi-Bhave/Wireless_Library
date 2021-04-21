import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAjAsIIo-s6mxHoylKugaUElREj_vgFiBc",
  authDomain: "wily-c9add.firebaseapp.com",
  projectId: "wily-c9add",
  storageBucket: "wily-c9add.appspot.com",
  messagingSenderId: "98277085640",
  appId: "1:98277085640:web:3910edb9ca8aa0222c70fd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();