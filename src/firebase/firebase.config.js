// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0mo7u8Bu09klgW_QNieT_rhE5rdCfvJE",
  authDomain: "car-store-project-e0efe.firebaseapp.com",
  projectId: "car-store-project-e0efe",
  storageBucket: "car-store-project-e0efe.appspot.com",
  messagingSenderId: "225057962248",
  appId: "1:225057962248:web:1e3d9311842b67c976d4bd"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app