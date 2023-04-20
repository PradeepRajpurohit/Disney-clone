// // Import the functions you need from the SDKs you need
// import firebase from "firebase";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCpk6JRXIECKJNTb1_JmDPZrrd_ruJUh20",
//   authDomain: "disneyclone-ccb00.firebaseapp.com",
//   projectId: "disneyclone-ccb00",
//   storageBucket: "disneyclone-ccb00.appspot.com",
//   messagingSenderId: "308807465010",
//   appId: "1:308807465010:web:3db9923d4314727b37242b"
// };

// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);

// const db = app.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage };
// export default db;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider,signInWithPopup } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpk6JRXIECKJNTb1_JmDPZrrd_ruJUh20",
  authDomain: "disneyclone-ccb00.firebaseapp.com",
  projectId: "disneyclone-ccb00",
  storageBucket: "disneyclone-ccb00.appspot.com",
  messagingSenderId: "308807465010",
  appId: "1:308807465010:web:3db9923d4314727b37242b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);



export { auth, provider,signInWithPopup,GoogleAuthProvider,storage };
export default db;



