import React, { useEffect, useState } from "react";

import Header from "../Components/Header";
import db from "../firebase";

function Stories() {
  const [stories, setStories] = useState([])
  console.log(stories)
  useEffect(() => {


    const getStories = async () => {
      try {
        const querySnapshot = await db.collection('stories').get();
        setStories(querySnapshot)
        const storyArr = querySnapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id
        }))

        setStories(storyArr)
      } catch (error) {
        console.error("Error getting documents: ", error);
      }
    }

    getStories();
  }, [])

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />
      <main className="container mx-auto py-8 px-4">

        <section>
          <h2 className="text-3xl font-bold mb-6 text-purple-300">
            Latest Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">



            {stories.map((story, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-purple-600 rounded-lg p-4 hover:shadow-purple-500/20 transition-shadow
              hover:bg-gray-800"
              >
                <h3 className="text-xl font-semibold mb-2 text-purple-200">
                  {story.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {story.start}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-purple-400 text-sm flex items-center gap-1">
                    <span>✍</span>
                    {story.author ? story.author : 'Unknown'}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400 flex items-center">
                      <span>⭐</span>
                      4.7
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

    </div>
  );
}

export default Stories;
