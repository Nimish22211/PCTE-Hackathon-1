<<<<<<< HEAD
// LandingPage.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
=======
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
>>>>>>> 2dabd41 (Landing Page)

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

<<<<<<< HEAD
// Main Container styles
const Container = styled.div`
  background-color: #111827;
  color: ${(props) => props.theme.color};
  min-height: 100vh;
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
`;
=======
const Phone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);
>>>>>>> 2dabd41 (Landing Page)

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

<<<<<<< HEAD
const ButtonContainer = styled.div`
  margin-top: 20px; /* Adds space between the subtitle and the button */
`;

const Subtitle = styled.h3`
  margin: 20px 0; /* Adds space above and below the subtitle */
  color: #bbb;
  font-size: 24px;
`;

// StoryVerse Title styles
const Title = styled.h2`
  font-size: 4rem;
  margin: 40px 0 20px;
`;

// Stories Section styles
const StoriesSection = styled.section`
  background-color: #222;
  color: #ddd;
  padding: 40px 20px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Story Box styles
const StoryBox = styled.div`
  background-color: #333;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 600px;
  margin: 10px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: left;
`;

// About Section styles
const AboutSection = styled.section`
  background-color: #111827;
  color: #fff;
  padding: 50px 20px;
  margin-top: 40px;
  border-top: 3px solid #ff007f;
`;

// Sparkle styles
const Sparkle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #fff;
  border-radius: 50%;
  opacity: 0;
`;

const LandingPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Generate sparkles evenly in the background
  const generateSparkles = () => {
    const sparkles = [];
    for (let i = 0; i < 20; i++) {
      sparkles.push(
        <Sparkle
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            left: `${(i % 5) * 20 + Math.random() * 10}%`,
            top: `${Math.floor(i / 5) * 20 + Math.random() * 10}%`,
          }}
        />
      );
    }
    return sparkles;
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Container>
        <Header>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            StoryVerse
          </h1>
          <Link to="/login">
            Login
          </Link>
        </Header>

        <motion.div initial="initial" animate="animate" className="flex flex-col items-center gap-2">
          <h1 className="text-8xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            StoryVerse
          </h1>
          <h3>Unleash Your Imagination Through Interactive Stories</h3>
          <Link
            to="/login"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700
                         text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 ease-in-out
                         transform hover:scale-105 flex items-center justify-center
                         shadow-lg hover:shadow-cyan-500/50 max-w-fit mt-4"
          >
            Enter the storyverse
          </Link>
        </motion.div>

        <StoriesSection>
          <h3>
            StoryVerse has been used to create thousands of works. Here's a
            sample:
          </h3>
          <StoryBox>
            <h2 className="text-xl">
              <strong>🌟 The Quest of the Forgotten Realms</strong>
            </h2>
            <p>
              Follow the journey of a young adventurer who must navigate
              treacherous lands, form unexpected alliances, and uncover ancient
              secrets to save their world from an impending doom.
            </p>
          </StoryBox>
          <StoryBox>
            <h2 className="text-xl">
              <strong>🔥 Tales of the Undying Flame</strong>
            </h2>
            <p>
              A powerful mage, cursed with immortality, seeks a way to break
              their eternal torment while battling dark forces that threaten to
              consume everything in their path.
            </p>
          </StoryBox>
          <StoryBox>
            <h2 className="text-xl">
              <strong>🚀 The Galactic Odyssey</strong>
            </h2>
            <p>
              Join Captain Zara and her diverse crew as they embark on a daring
              mission to explore unknown galaxies, encounter alien
              civilizations, and confront the mysteries of the cosmos.
            </p>
          </StoryBox>
        </StoriesSection>

        {generateSparkles()}

        <AboutSection>
          <h3 className="text-2xl font-bold">About the Site</h3>
          <p>
            StoryVerse is a platform where storytellers and readers come
            together to create, explore, and experience interactive fiction like
            never before.
          </p>
        </AboutSection>
      </Container>
    </ThemeProvider>
=======
    setStars(Array.from({ length: 200 }, generateStar));
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-purple-900 via-blue-900 to-black">
      {stars.map(star => (
        <Star key={star.id} style={star.style} />
      ))}
    </div>
>>>>>>> 2dabd41 (Landing Page)
  );
};

const SleekText = ({ children }) => (
  <span className="font-bold sleek-text">{children}</span>
);

const StoryVerseLandingPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const features = [
    { icon: "⚡", text: "Collaborative authoring" },
    { icon: "🌿", text: "Non-linear storytelling" },
    { icon: "📚", text: "Efficient draft management" },
    { icon: "👤", text: "Personalized reading" }
  ];

  const sampleStories = [
    { title: "Quantum Paradox", genre: "Sci-Fi", icon: "🚀", color: "bg-blue-500" },
    { title: "Eternal Echoes", genre: "Fantasy", icon: "🧙‍♂️", color: "bg-purple-500" },
    { title: "Alley Whispers", genre: "Mystery", icon: "🕵️", color: "bg-red-500" },
    { title: "Destiny's Crossroads", genre: "Adventure", icon: "🗺️", color: "bg-green-500" }
  ];

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
          style={{
            y: scrollY * 0.5,
            opacity: 1 - scrollY / 500
          }}
        >
          <motion.h1 
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to <SleekText>STORYVERSE</SleekText>
          </motion.h1>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Where Your Stories Come to Life
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <ChevronDown />
          </motion.div>
        </motion.div>
      </header>

      {/* Content Wrapper */}
      <motion.div
        className="relative z-20 bg-gradient-to-b from-transparent to-gray-900"
        style={{
          y: Math.max(0, 100 - scrollY),
        }}
      >
        {/* Features Section */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-800 bg-opacity-40 backdrop-blur-md p-6 rounded-lg flex items-center space-x-4"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
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
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
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
      </motion.div>

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
