import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCsuo0EG4mI2XYqk5g0mrQhHWL7oJi5dz4",
    authDomain: "storyverse-fe8b8.firebaseapp.com",
    projectId: "storyverse-fe8b8",
    storageBucket: "storyverse-fe8b8.appspot.com",
    messagingSenderId: "939265654589",
    appId: "1:939265654589:web:b2fba95f2dedd522258f54"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore(app)
const provider = new GoogleAuthProvider();

export default db
export { auth, provider }