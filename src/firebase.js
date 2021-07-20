import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA3po_qmkCD-mcmCi2w1YvHxwxtS4r7ufQ",
    authDomain: "clone-5cebd.firebaseapp.com",
    projectId: "clone-5cebd",
    storageBucket: "clone-5cebd.appspot.com",
    messagingSenderId: "51805285720",
    appId: "1:51805285720:web:4f5641b8234fb8ee27c92d",
    measurementId: "G-D2XRGMQY0C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
