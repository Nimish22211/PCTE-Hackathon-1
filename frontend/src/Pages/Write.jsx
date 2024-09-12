import React, { useState } from 'react'
import Header from '../Components/Header'

function Write() {
    const [storyBody, setStoryBody] = useState('')

  return (
    <div className="bg-gray-900 min-h-screen text-white">
        <Header />
        <main className='container mx-auto py-8 px-12'>
        <h1 className="text-3xl font-bold mb-6 text-purple-300">Write Your Story</h1>
        <input 
            type="text" 
            placeholder="Enter your story title" 
            className="w-full bg-gray-900 border border-purple-600  text-white placeholder-gray-400 focus:outline focus:outline-purple-600 p-2 mb-2 rounded-lg" 
            />
        
        <textarea 
          placeholder="Start writing your story here..." 
          className="w-full h-96 mb-6 bg-gray-900 border border-purple-600 focus:outline focus:outline-purple-600 text-white placeholder-gray-400 resize-none rounded-lg p-2"
        //   value={storyBody}
        //   onChange={(e) => setStoryBody(e.target.value)}
        />
        </main>
        </div>
  )
}

export default Write