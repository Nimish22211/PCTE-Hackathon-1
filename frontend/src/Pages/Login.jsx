import React from "react";
import Sparkles from "../Components/Sparkles";

function Login() {
  return (
    <div className="min-h-screen bg-gray-900">
      {[...Array(20)].map((_, i) => (
        <img
          src="/assets/sparkles.svg"
          key={i}
          className="text-cyan-400 absolute animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            opacity: Math.random() * 0.5 + 0.5,
          }}
        />
      ))}

      <div>
        <img src="/assets/bookOpen.svg" />
        <h1>StoryVerse</h1>
        
      </div>

    </div>
  );
}

export default Login;
