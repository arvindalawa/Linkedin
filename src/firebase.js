import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const firebaseConfig = {
    apiKey: "AIzaSyC1UmgeQ9Y7jChoT-IGCKp96_XkNvuqk50",
    authDomain: "linkedin-clone-1cfd5.firebaseapp.com",
    projectId: "linkedin-clone-1cfd5",
    storageBucket: "linkedin-clone-1cfd5.appspot.com",
    messagingSenderId: "599309015813",
    appId: "1:599309015813:web:9872da018895e13e09b56c",
    measurementId: "G-XK4FS86BJ8"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
const storage=firebase.storage();
export {auth,provider,storage};
export default db;