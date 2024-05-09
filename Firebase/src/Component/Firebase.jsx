import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyD2WFM_9H-Bgy43nZBNsOSS4wq170Bi_RQ",
  authDomain: "halogen-base-415019.firebaseapp.com",    
  projectId: "halogen-base-415019",
  storageBucket: "halogen-base-415019.appspot.com",
  messagingSenderId: "718766323319",
  appId: "1:718766323319:web:38e39d3faaea95f1d73872",
  measurementId: "G-BY2K7KEDM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}
export const images = getStorage(app)
