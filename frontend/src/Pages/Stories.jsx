import React, { useState } from "react";

import Header from "../Components/Header";

function Stories() {


  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />
    <main className="container mx-auto py-8 px-4">

      <section>
        <h2 className="text-3xl font-bold mb-6 text-purple-300">
          Latest Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((story) => (
            <div
              key={story}
              className="bg-gray-900 border border-purple-600 rounded-lg p-4 hover:shadow-purple-500/20 transition-shadow
              hover:bg-gray-800"
            >
              <h3 className="text-xl font-semibold mb-2 text-purple-200">
                Echoes of Eternity
              </h3>
              <p className="text-gray-400 mb-4 line-clamp-3">
                As the last star in the universe flickers, a lone explorer
                discovers an ancient artifact that could rewrite the laws of
                physics...
              </p>
              <div className="flex items-center justify-between">
                <span className="text-purple-400 text-sm flex items-center gap-1">
                  <span>🪶</span>
                  Nova Starwriter
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 flex items-center">
                    <span>⭐</span>
                    4.7
                  </span>
                  {/* <button
                    variant="ghost"
                    size="sm"
                    className="text-purple-300 hover:text-purple-100 hover:bg-purple-900"
                  >
                    Read
                  </button> */}
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
