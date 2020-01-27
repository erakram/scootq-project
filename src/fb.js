 import firebase from 'firebase/app'
 import 'firebase/firestore'
 
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyBEQd3symGIEV9SnvdpJ7-5m2VCB1sGfn8",
    authDomain: "vuetify-project-5d211.firebaseapp.com",
    databaseURL: "https://vuetify-project-5d211.firebaseio.com",
    projectId: "vuetify-project-5d211",
    storageBucket: "vuetify-project-5d211.appspot.com",
    messagingSenderId: "667872960512"
  };
  firebase.initializeApp(config);
  const db = firebase.firestore();

  db.settings({ timestampsInSnapshots: true });

  export default db;