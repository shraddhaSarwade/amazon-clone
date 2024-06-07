import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBRbGsAtmRTEzJPMTAd2Cuynu47lJZlsCo",
  authDomain: "clone-b8c07.firebaseapp.com",
  projectId: "clone-b8c07",
  storageBucket: "clone-b8c07.appspot.com",
  messagingSenderId: "415070424159",
  appId: "1:415070424159:web:5cbfdd89553ab4303a9fea",
  measurementId: "G-7X6V8Q3V7F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
