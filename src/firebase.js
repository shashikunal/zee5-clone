import firebase from "firebase";

//?Authentication //auth
import "firebase/auth";
//?realTime database =>just like mongodb
import "firebase/database";
//?Storage //you can store files , images , videos , pdf on remote storage
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDcy-zJ5sg7TZjhLIsf0xglMIYuCM2RrEk",
  authDomain: "zee5-clone-387ac.firebaseapp.com",
  projectId: "zee5-clone-387ac",
  storageBucket: "zee5-clone-387ac.appspot.com",
  messagingSenderId: "635135889313",
  appId: "1:635135889313:web:35e81a20073486808485e0",
};

//!initialize firebase app and communicate with react app
firebase.initializeApp(firebaseConfig);
export default firebase;
