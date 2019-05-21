import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCxZDlZcDNZIHeI4F3lXrC0823B8U_lJEU",
    authDomain: "reviewr-f6739.firebaseapp.com",
    databaseURL: "https://reviewr-f6739.firebaseio.com",
    projectId: "reviewr-f6739",
    storageBucket: "reviewr-f6739.appspot.com",
    messagingSenderId: "997180876930",
    appId: "1:997180876930:web:c260453f72d353ec"
  };

  // Not a React Component just a utility class!

firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.firestore();

