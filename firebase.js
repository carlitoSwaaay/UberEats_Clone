import firebase from "firebase";

const firebaseConfig = {


};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;