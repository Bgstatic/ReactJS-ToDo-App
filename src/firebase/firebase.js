import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyAfSpY-uvzpRdBD0MKgxbbK4DJFCN_JKuU",
    authDomain: "react-to-do-8097f.firebaseapp.com",
    databaseURL: "https://react-to-do-8097f.firebaseio.com",
    projectId: "react-to-do-8097f",
    storageBucket: "react-to-do-8097f.appspot.com",
    messagingSenderId: "182370872132",
    appId: "1:182370872132:web:c4deb152bd1ee76be0c511",
    measurementId: "G-JJ394M9LL4"

});

const db = firebaseApp.firestore();

export default db ;

