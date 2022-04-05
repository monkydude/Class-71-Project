import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyA91s2OsftE0HuKt95IWvBWR7e9mwkXhCo",
    authDomain: "project-71-29059.firebaseapp.com",
    projectId: "project-71-29059",
    storageBucket: "project-71-29059.appspot.com",
    messagingSenderId: "522993782875",
    appId: "1:522993782875:web:aae88ae5728d8092f1af7e"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
