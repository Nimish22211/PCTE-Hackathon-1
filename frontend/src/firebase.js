import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCsuo0EG4mI2XYqk5g0mrQhHWL7oJi5dz4",
  authDomain: "storyverse-fe8b8.firebaseapp.com",
  projectId: "storyverse-fe8b8",
  storageBucket: "storyverse-fe8b8.appspot.com",
  messagingSenderId: "939265654589",
  appId: "1:939265654589:web:b2fba95f2dedd522258f54"
};

//eslint-disable-next-line
const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth()
const db = firebase.firestore()
const provider = new GoogleAuthProvider();

export default db
export { auth, provider }