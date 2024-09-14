import React, { useState } from 'react';
import Header from '../Components/Header';
import { BookOpen, Save, Plus, ChevronDown, Send, CloudUpload } from "lucide-react";
import db from '../firebase'
import useAuth from '../Hooks/useAuth';

function Write() {
  const [storyBody, setStoryBody] = useState('');
  const [storyTitle, setStoryTitle] = useState('');
  const [currStoryData, setCurrStoryData] = useState({})
  const [storyParts, setStoryParts] = useState([{ part: 0, content: '' }]);
  const [currentPart, setCurrentPart] = useState(0);
  const { auth } = useAuth()
  const addNewPart = () => {
    console.log(storyParts[currentPart])
    setCurrStoryData({ part: currentPart, content: storyBody })

    // setStoryParts([...storyParts, { part: currentPart, content: storyBody }, { part: storyParts.length + 1, content: '' }]);
    // setStoryParts([...storyParts, { part: currentPart, content: storyBody }]);
    setStoryParts(prev => {
      if (prev.length <= 1) {
        return [{ part: currentPart, content: storyBody }, { part: storyParts.length, content: '' }]
      } else {
        let arr = [...prev, { part: storyParts.length, content: '' }]
        arr[currentPart].content = storyBody
        return arr
      }
    })
    setStoryBody('')
    setCurrentPart(storyParts.length);
  };

  const handlePublish = () => {
    let finalData = [...storyParts]

    finalData[currentPart].content = storyBody

    const uniqueID = crypto.randomUUID();
    db.collection('stories').doc(uniqueID).set({
      title: storyTitle,
      start: storyParts[0].content,
      branches: [],
      collaborators: [],
      author: auth.auth.currentUser.displayName
    }).then(() => {
      finalData.forEach(part => {

        db.collection('stories').doc(uniqueID).collection('branches').doc(String(part.part)).set({
          content: part.content
        })
      })

    })
  };

  const changePart = (e) => {
    let currPart = e.target.value
    setCurrentPart(currPart)
    setStoryBody(storyParts[currPart].content)

    if (storyBody.length > 0) {
      setStoryParts(prev => {
        let arr = [...prev]
        arr[currentPart].content = storyBody
        return arr
      })
    }

    // setStoryBody(storyParts[changePart].content)
    console.log(e.target.value)
    console.log(storyParts[currPart])
  }

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />
      <main className="container mx-auto py-8 px-12 flex flex-col gap-3">
        <h1 className="text-3xl font-bold mb-6 text-purple-300">Write Your Story</h1>

        {/* Input for story title */}
        <input
          type="text"
          value={storyTitle}
          onChange={e => setStoryTitle(e.target.value)}
          placeholder="Enter your story title"
          className="w-full bg-gray-900 border border-purple-600 text-white placeholder-gray-400 focus:outline focus:outline-purple-600 p-2 rounded-lg"
        />

        {/* Section to add story parts */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <select className="rounded-lg border border-purple-500 text-purple-300 hover:bg-purple-900 flex items-center px-4 py-2" value={currentPart} onChange={changePart}>
              {storyParts.map((currPart, index) => (
                <option value={index} key={index}>{currPart.part}</option>

              ))}
            </select>
            {/* Dropdown menu for parts would go here */}
          </div>
          <button onClick={addNewPart} variant="outline" className="border rounded-lg border-purple-500 text-purple-300 hover:bg-purple-900 flex items-center px-4 py-2">
            <Plus className="mr-2 h-4 w-4" /> Add New Part
          </button>
        </div>

        {/* Textarea for story body */}
        <textarea
          placeholder="Start writing your story here..."
          className="w-full h-96 bg-gray-900 border border-purple-600 focus:outline focus:outline-purple-600 text-white placeholder-gray-400 resize-none rounded-lg p-2"
          value={storyBody}
          onChange={e => setStoryBody(e.target.value)}
        />

        {/* Publish button */}
        <button className="bg-purple-600 hover:bg-purple-700 text-white flex items-center px-4 py-2 rounded-lg w-fit" onClick={handlePublish}>
          <Send className="mr-2 h-4 w-4" /> Publish
        </button>
      </main>
    </div>
  );
}

export default Write;
