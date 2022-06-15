import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCt0_5UCqFZtT8oB8oYqdbAFvuo_-h_Oqg",
    authDomain: "reactcart-a91aa.firebaseapp.com",
    projectId: "reactcart-a91aa",
    storageBucket: "reactcart-a91aa.appspot.com",
    messagingSenderId: "91285250787",
    appId: "1:91285250787:web:54516f39f323ad5065dbd6"
  };
  
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;