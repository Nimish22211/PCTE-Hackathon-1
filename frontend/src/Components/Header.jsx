import React, { useState } from 'react'
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import useAuth from "../Hooks/useAuth";
import { Link } from "react-router-dom";

function Header() {

    const { setAuth } = useAuth(); // Auth context state
    const [userAuth, setUserAuth] = useState();
  
    onAuthStateChanged(auth, (user) => {
      setUserAuth(user);
      setAuth(user);
    });
  
    const SignOut = () => {
      return signOut(auth);
    };
  return (
    <header className="bg-gray-900 shadow-lg p-4 flex justify-between items-center text-white border-b border-purple-600">
    <div className="text-neon-green  text-2xl tracking">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
        StoryVerse
      </h1>
    </div>
    <nav className="space-x-6">
      <Link
        to="/write"
        className="text-purple-300 hover:text-purple-100 transition-colors"
      >
        +Write
      </Link>
      <Link
        to="/profile"
        className="text-purple-300 hover:text-purple-100 transition-colors">
        User Profile
      </Link>
      <Link
        to="/stories"
        className="text-purple-300 hover:text-purple-100 transition-colors">
        Stories
      </Link>
      <button
        className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg transition-colors"
        onClick={SignOut}
      >
        Logout
      </button>
    </nav>
  </header>
  )
}

export default Header