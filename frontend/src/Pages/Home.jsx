import React, { useState } from 'react'
import { BookOpen, Pen, Users, GitFork, ThumbsUp } from "lucide-react"
import {Link} from "react-router-dom"
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import useAuth from "../Hooks/useAuth";

function Home() {
  const { setAuth } = useAuth(); // Auth context state
  const [userAuth, setUserAuth] = useState();

  onAuthStateChanged(auth, (user) => {
    setUserAuth(user);
    setAuth(user);
  });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
<img src="/assets/blur-bg.svg" className='h-full w-full absolute object-cover'/>
    <nav className="flex justify-between items-center p-4 mx-auto w-full px-12 backdrop-blur-lg fixed z-20">
        <Link href="/" className='flex gap-3 items-center'>
        <img src="/assets/bookOpen.svg" />
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
        StoryVerse
      </h1>
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/about" className="hover:text-purple-400 transition-colors">About</Link>
          <Link to={userAuth ? '/stories' : 'login'} variant="outline" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1 rounded-md text-md transition-colors">
            {userAuth ? 'Stories' : 'Login'}
          </Link>
        </div>
      </nav>
      <section className="flex-grow flex flex-col items-center justify-center text-center p-4 min-h-[calc(100vh-60px)] z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Non-Linear Stories
        </h1>
        <p className="text-md md:text-lg mb-8 max-w-2xl text-gray-300">
          Write, read, and share captivating stories in a futuristic realm of endless possibilities.
        </p>
        <Link to={userAuth ? '/stories' : 'login'} className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg transition-colors" >
        Get Started
        </Link>
      </section>


      <section className="py-16 px-4 bg-gray-950">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-400 py-8">How it Works</h2>
        <div className="max-w-6xl mx-auto space-y-24">
          {/* For Readers */}
          <div>
            <h3 className="text-2xl font-semibold mb-12 text-center text-pink-400">For Readers</h3>
            <div className="relative">
              <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <path d="M100,50 Q175,25 250,50 T400,50 T550,50, T700,50, T850,50, T1000, 50" fill="none" stroke="#8B5CF6" strokeWidth="3" />
                <path d="M250,50 Q325,75 400,50" fill="none" stroke="#8B5CF6" strokeWidth="3" strokeDasharray="6 3" />
              </svg>
              <div className="relative z-10 flex justify-between">
                <RoadmapStep icon={BookOpen} title="Discover" description="Find intriguing stories" />
                <RoadmapStep icon={GitFork} title="Choose" description="Select your path" />
                <RoadmapStep icon={ThumbsUp} title="Enjoy" description="Experience unique endings" />
              </div>
            </div>
          </div>
          
          {/* For Writers */}
          <div>
            <h3 className="text-2xl font-semibold mb-12 text-center text-pink-400">For Writers</h3>
            <div className="relative">
              <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* <path d="M100,50 Q175,25 250,50 T400,50 T550,50" fill="none" stroke="#EC4899" strokeWidth="3" /> */}
                <path d="M100,50 Q175,25 250,50 T400,50 T550,50, T700,50, T850,50, T1000, 50" fill="none" stroke="#EC4899" strokeWidth="3" />
                {/* <path d="M250,50 Q325,75 400,50" fill="none" stroke="#EC4899" strokeWidth="3" strokeDasharray="6 3" /> */}
                {/* <path d="M250,50 Q325,75 400,50" fill="none" stroke="#EC4899" strokeWidth="3" strokeDasharray="6 3" /> */}
              </svg>
              <div className="relative z-10 flex justify-between">
                <RoadmapStep icon={Pen} title="Create" description="Write your story" />
                <RoadmapStep icon={GitFork} title="Branch" description="Add multiple paths" />
                <RoadmapStep icon={Users} title="Share" description="Publish and get feedback" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center flex flex-col items-center justify-center">
          <p className="text-lg text-gray-300 mb-8 max-w-[600px]">
            Experience stories where you're in control. Writers provide multiple plot options, 
            allowing readers to shape the narrative and create their own unique adventure.
          </p>
          <Link to={userAuth ? '/stories' : 'login'} className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg transition-colors" >
          Get Started
        </Link>   
        </div>
      </section>

      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-400">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <FeatureCard 
            title="Write" 
            description="Craft your stories with our intuitive writing tools."
          />
          <FeatureCard 
            title="Read" 
            description="Explore a vast library of user-generated content."
          />
          <FeatureCard 
            title="Connect" 
            description="Join a community of passionate writers and readers."
          />
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ title, description } ) {
    return (
      <div className="bg-gray-800 p-6 rounded-lg border border-purple-500 hover:border-pink-500 transition-colors">
        <h3 className="text-xl font-semibold mb-2 text-purple-400">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    )
  }

  function RoadmapStep({ icon: Icon, title, description }) {
    return (
      <div className="flex flex-col items-center w-1/3">
        <div className="bg-gray-700 p-6 rounded-full mb-4 shadow-lg shadow-purple-500/50">
          <Icon className="text-purple-400 w-10 h-10" />
        </div>
        <h4 className="text-lg font-semibold mb-2 text-purple-400">{title}</h4>
        <p className="text-sm text-gray-300 text-center">{description}</p>
      </div>
    )
  }

export default Home