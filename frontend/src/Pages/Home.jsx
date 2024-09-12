import React from 'react'
import {Link} from "react-router-dom"

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
    <nav className="flex justify-between items-center p-4 bg-gray-800">
        <Link href="/" className="text-2xl font-bold text-purple-500">StoryNexus</Link>
        <div className="flex items-center space-x-4">
          <Link href="/about" className="hover:text-purple-400 transition-colors">About</Link>
          <button variant="outline" className="border-purple-500 text-purple-500 purple-500 hover:text-white transition-colors">
            Login
          </button>
        </div>
      </nav>
      <section className="flex-grow flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          StoryVerse
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-300">
          Write, read, and share captivating stories in a futuristic realm of endless possibilities.
        </p>
        <Link to="/login" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg transition-colors" >
          Get Started
        </Link>
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

function FeatureCard({ title, description }: { title: string; description: string }) {
    return (
      <div className="bg-gray-800 p-6 rounded-lg border border-purple-500 hover:border-pink-500 transition-colors">
        <h3 className="text-xl font-semibold mb-2 text-purple-400">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    )
  }

export default Home