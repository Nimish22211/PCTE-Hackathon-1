import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Simple SVG icons
const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const Mail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const Phone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const Star = ({ style }) => (
  <motion.div
    className="absolute rounded-full bg-white"
    style={style}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
    }}
    transition={{
      duration: Math.random() * 3 + 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const StarryBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStar = () => ({
      id: Math.random(),
      style: {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 2 + 1}px`,
        height: `${Math.random() * 2 + 1}px`,
      },
    });

    setStars(Array.from({ length: 200 }, generateStar));
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-purple-900 via-blue-900 to-black">
      {stars.map(star => (
        <Star key={star.id} style={star.style} />
      ))}
    </div>
  );
};

const SleekText = ({ children }) => (
  <span className="font-bold sleek-text">{children}</span>
);

const StoryVerseLandingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: "⚡", text: "Collaborative authoring" },
    { icon: "🌿", text: "Non-linear storytelling" },
    { icon: "📚", text: "Efficient draft management" },
    { icon: "👤", text: "Personalized reading" },
    { icon: "🤖", text: "AI writing assistant" }
  ];

  const sampleStories = [
    { title: "Quantum Paradox", genre: "Sci-Fi", icon: "🚀", color: "bg-blue-500" },
    { title: "Eternal Echoes", genre: "Fantasy", icon: "🧙‍♂️", color: "bg-purple-500" },
    { title: "Alley Whispers", genre: "Mystery", icon: "🕵️", color: "bg-red-500" },
    { title: "Destiny's Crossroads", genre: "Adventure", icon: "🗺️", color: "bg-green-500" }
  ];

  const testimonials = [
    { name: "Alice W.", text: "StoryVerse revolutionized my writing process. The AI assistant is like having a co-author!" },
    { name: "Bob M.", text: "The non-linear storytelling feature opened up new creative possibilities for me." },
    { name: "Charlie D.", text: "I've never felt so organized with my drafts. StoryVerse is a game-changer!" }
  ];

  const handleAIAssistantClick = () => {
    // This is where you would integrate your AI functionality
    console.log("AI Assistant button clicked");
    // For example, you could open a modal or redirect to an AI interface
  };

  return (
    <div className="text-white min-h-screen font-sans relative overflow-hidden">
      <StarryBackground />

      {/* Navigation Bar */}
      <nav className="fixed w-full bg-opacity-50 backdrop-blur-md z-50">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="#" className="text-2xl"><SleekText>STORYVERSE</SleekText></a>
          <div>
            <button className="px-4 py-2 rounded-full bg-white text-gray-900 mr-2 hover:bg-gray-200 transition-colors">Log In</button>
            <button className="px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors">Sign Up</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="h-screen flex items-center justify-center relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-5xl font-bold mb-4"
            style={{ opacity: 1 - scrollY / 300 }} // Fade out as user scrolls
          >
            Welcome to <SleekText>STORYVERSE</SleekText>
          </motion.h1>
          <motion.p 
            className="text-xl mb-8"
            style={{ opacity: 1 - scrollY / 300 }} // Fade out as user scrolls
          >
            Where Your Stories Come to Life
          </motion.p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown />
          </motion.div>
        </motion.div>
      </header>

      {/* Content Wrapper */}
      <div className="relative z-20 bg-gradient-to-b from-transparent to-gray-900">
        {/* Features Section */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-800 bg-opacity-40 backdrop-blur-md p-6 rounded-lg flex items-center space-x-4"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 text-blue-400 text-2xl">
                    {feature.icon}
                  </div>
                  <p className="text-lg flex-grow">{feature.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Non-linear Storyline Section */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Experience Non-linear Storytelling</h2>
            <motion.div 
              className="relative h-60 bg-gray-800 bg-opacity-40 backdrop-blur-md rounded-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              {/* Simulated branching paths */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                <motion.path
                  d="M10,50 Q50,0 90,50 Q50,100 10,50"
                  stroke="#4299e1"
                  strokeWidth="0.5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.path
                  d="M10,50 Q50,25 90,50 Q50,75 10,50"
                  stroke="#ed64a6"
                  strokeWidth="0.5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-xl font-bold">Your Story, Your Choices</p>
              </div>
            </motion.div>
          </div>
        </section>

       

        {/* Sample Stories Section */}
        <section className="py-20 bg-gray-800 bg-opacity-40 backdrop-blur-md relative z-10">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sampleStories.map((story, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-700 bg-opacity-40 backdrop-blur-md p-6 rounded-lg cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="mr-3 text-2xl">{story.icon}</div>
                    <h3 className="text-lg font-bold">{story.title}</h3>
                  </div>
                  <span className={`text-sm text-white px-2 py-1 rounded-full ${story.color}`}>{story.genre}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Carousel */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">What Our Users Say</h2>
            <div className="relative h-48 bg-gray-800 bg-opacity-40 backdrop-blur-md rounded-lg overflow-hidden">
              <AnimatePresence initial={false}>
                <motion.div
                  key={currentTestimonial}
                  className="absolute inset-0 flex items-center justify-center p-8"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center">
                    <p className="text-lg mb-4">"{testimonials[currentTestimonial].text}"</p>
                    <p className="font-bold">- {testimonials[currentTestimonial].name}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

         {/* AI Writing Assistant Section */}
         <section className="py-20 relative z-10">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">AI Writing Assistant</h2>
            <motion.div 
              className="bg-gray-800 bg-opacity-40 backdrop-blur-md p-8 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg mb-4">
                Unlock your creative potential with our advanced AI writing assistant. Get suggestions, overcome writer's block, and refine your prose with the power of artificial intelligence.
              </p>
              <div className="flex justify-center">
                <button 
                  className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                  onClick={handleAIAssistantClick}
                >
                  Try AI Assistant
                </button>
              </div>
            </motion.div>
          </div>
        </section>
        

        {/* Contact Section */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <motion.a 
                href="mailto:contact@storyverse.com"
                className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Mail />
                <span>contact@storyverse.com</span>
              </motion.a>
              <motion.a 
                href="tel:+1234567890"
                className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Phone />
                <span>+1 (234) 567-890</span>
              </motion.a>
            </div>
          </div>
        </section>

        <footer className="bg-gray-800 bg-opacity-80 py-6 relative z-10">
          <div className="container mx-auto px-6 text-center text-sm text-gray-400">
            <p>&copy; 2024 <SleekText>STORYVERSE</SleekText>. All rights reserved.</p>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        .sleek-text {
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default StoryVerseLandingPage;