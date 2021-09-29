import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyD03U7FtKjpwi9yFU8MDdT_OK3rJZbHjfs",
    authDomain: "project-management-f580d.firebaseapp.com",
    databaseURL: "https://project-management-f580d.firebaseio.com",
    projectId: "project-management-f580d",
    storageBucket: "project-management-f580d.appspot.com",
    messagingSenderId: "487055318019",
    appId: "1:487055318019:web:41a621a24e9623f4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;