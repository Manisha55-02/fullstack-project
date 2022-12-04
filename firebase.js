const firebaseConfig = {
    apiKey: "AIzaSyDx1IWvLTBKygF12evjq6Aj35P772iai4o",
    authDomain: "check-42131.firebaseapp.com",
    projectId: "check-42131",
    storageBucket: "check-42131.appspot.com",
    messagingSenderId: "465522763011",
    appId: "1:465522763011:web:b069f220221bd47cf8b536",
    measurementId: "G-DXHF8L05V8"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();