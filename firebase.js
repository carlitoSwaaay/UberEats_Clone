import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAZ8Fo7R5jXjwtmx1GiCC8_VEpogIBHpIU",
  authDomain: "rn-uber-eats-clone-9538f.firebaseapp.com",
  projectId: "rn-uber-eats-clone-9538f",
  storageBucket: "rn-uber-eats-clone-9538f.appspot.com",
  messagingSenderId: "897616338192",
  appId: "1:897616338192:web:6ed42cb4cd5c37dae09995"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;