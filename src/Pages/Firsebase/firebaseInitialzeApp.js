import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseInitializeApp = ()=>{
    initializeApp(firebaseConfig);
}
export default firebaseInitializeApp;