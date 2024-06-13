import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA1Riorili68UH_ucx9cHRaLaXWdvkasZE",
    authDomain: "todo-app-a79c4.firebaseapp.com",
    projectId: "todo-app-a79c4",
    storageBucket: "todo-app-a79c4.appspot.com",
    messagingSenderId: "9343096911",
    appId: "1:9343096911:web:cf0d18940eca546638323a",
    measurementId: "G-7TNV1Q0XGP"
  };
  const app=initializeApp(firebaseConfig);
  const db=getFirestore(app);
  export { db };