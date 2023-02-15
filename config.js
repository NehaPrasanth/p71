import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
import firebase from 'firebase'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMsy8EORR4-JTOAizD43QmZiTWn_lFNu0",
  authDomain: "e-library-5fea6.firebaseapp.com",
  projectId: "e-library-5fea6",
  storageBucket: "e-library-5fea6.appspot.com",
  messagingSenderId: "68235131372",
  appId: "1:68235131372:web:9ac03382bf5530da8428c9"
};

// Initialize Firebase
if (!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore()


