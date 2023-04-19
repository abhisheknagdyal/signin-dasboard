import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider ,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAVXmeu1AhgITyyJnsXYDpHv0wLrv9PcdE",
    authDomain: "crwn-clothing-db-1db8c.firebaseapp.com",
    projectId: "crwn-clothing-db-1db8c",
    storageBucket: "crwn-clothing-db-1db8c.appspot.com",
    messagingSenderId: "861263679024",
    appId: "1:861263679024:web:38f2f5250539ab35ea67f5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider}