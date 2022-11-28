// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0rgI-bcL7B4Hn-qNfiw1K8NVGdxv12UA",
  authDomain: "herbrand-4ea9b.firebaseapp.com",
  projectId: "herbrand-4ea9b",
  storageBucket: "herbrand-4ea9b.appspot.com",
  messagingSenderId: "1083154581931",
  appId: "1:1083154581931:web:45cdbfa7d78991ea56aaee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app