import React, { useState } from 'react'
import Header from '../Components/Header'

function Write() {
    const [storyBody, setStoryBody] = useState('')

  return (
    <div className="bg-gray-900 min-h-screen text-white">
        <Header />
        <h1 className="text-3xl font-bold mb-6 text-purple-300">Write Your Story</h1>
        <input 
            type="text" 
            placeholder="Enter your story title" 
            className="w-full bg-gray-900 border-purple-600 focus:border-purple-400 text-white placeholder-gray-400" 
            />
        
        <textarea 
          placeholder="Start writing your story here..." 
          className="w-full h-96 mb-6 bg-gray-900 border-purple-600 focus:border-purple-400 text-white placeholder-gray-400 resize-none"
          value={storyBody}
          onChange={(e) => setStoryBody(e.target.value)}
        />
        </div>
  )
}

export default Write