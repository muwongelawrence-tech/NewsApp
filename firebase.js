
import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAwtjbEE7qt5a3_D28fgaMOLXiYXvEhAc4",
    authDomain: "facebook-build-clone.firebaseapp.com",
    projectId: "facebook-build-clone",
    storageBucket: "facebook-build-clone.appspot.com",
    messagingSenderId: "668330944219",
    appId: "1:668330944219:web:f9502908f69f6533688efe"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

 const db = app.firestore();

//const db = firebase.firestore();

const storage = firebase.storage();

export { db , storage };
