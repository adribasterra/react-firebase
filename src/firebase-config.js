import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCMIQSfAZBaeiTrriYa1vjLF_nztHjfM7c",
    authDomain: "prueba-react-516c5.firebaseapp.com",
    projectId: "prueba-react-516c5",
    storageBucket: "prueba-react-516c5.appspot.com",
    messagingSenderId: "206150484355",
    appId: "1:206150484355:web:26a65f0687c5b57baa36b6"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth();

export { auth };