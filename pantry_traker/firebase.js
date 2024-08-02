// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFireStore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW904rDW9nsETy5HNB9Uh98PkRV4xHygU",
  authDomain: "pantrytracker-2c2ba.firebaseapp.com",
  projectId: "pantrytracker-2c2ba",
  storageBucket: "pantrytracker-2c2ba.appspot.com",
  messagingSenderId: "794791137126",
  appId: "1:794791137126:web:4f60c07397a70f4ca942a7",
  measurementId: "G-JWG1F8GF1H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFireStore(app);

export{firestore}