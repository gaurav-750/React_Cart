import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHm-sLxRur5IWfIIP5B3MFCFxqem2oNno",
  authDomain: "shopping-cart-b0e65.firebaseapp.com",
  projectId: "shopping-cart-b0e65",
  storageBucket: "shopping-cart-b0e65.appspot.com",
  messagingSenderId: "436273998596",
  appId: "1:436273998596:web:ab02c6fbf457d275b7be51"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;