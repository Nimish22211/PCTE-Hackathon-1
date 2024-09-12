// LandingPage.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import styled, { ThemeProvider } from "styled-components";

// Define dark and light themes
const lightTheme = {
  background: "#f8f9fa",
  color: "#333",
};

const darkTheme = {
  background: "#1b1b1b",
  color: "#fff",
};

// Main Container styles
const Container = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  min-height: 100vh;
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
`;

// Header and Button styles
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.background};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  color: ${(props) => props.theme.color};
  cursor: pointer;
  font-size: 1.5rem;
`;

const Button = styled(motion.button)`
  background-color: #ff007f;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(255, 0, 127, 0.5);
  transition: all 0.3s ease;
  &:hover {
    background-color: #ff4da6;
    transform: scale(1.05);
  }
`;

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
  background-color: #333;
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
        {/* Header with Theme Toggle */}
        <Header>
          <h1>StoryVerse</h1>
          <ToggleButton onClick={toggleTheme}>
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </ToggleButton>
        </Header>

        {/* Main Content */}
        <motion.div initial="initial" animate="animate">
          {/* Center StoryVerse Text */}
          <Title>StoryVerse</Title>
          <h3>Unleash Your Imagination Through Interactive Stories</h3>
          <Button whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
            Enter the StoryVerse
          </Button>
        </motion.div>

        {/* New Stories Section */}
        <StoriesSection>
          <h3>
            StoryVerse has been used to create thousands of works. Here's a
            sample:
          </h3>
          {/* Sample Story Boxes */}
          <StoryBox>
            <h2><strong>🌟 The Quest of the Forgotten Realms</strong></h2>
            <p>
              Follow the journey of a young adventurer who must navigate
              treacherous lands, form unexpected alliances, and uncover ancient
              secrets to save their world from an impending doom.
            </p>
          </StoryBox>
          <StoryBox>
            <h2><strong>🔥 Tales of the Undying Flame</strong></h2>
            <p>
              A powerful mage, cursed with immortality, seeks a way to break
              their eternal torment while battling dark forces that threaten to
              consume everything in their path.
            </p>
          </StoryBox>
          <StoryBox>
            <h2><strong>🚀 The Galactic Odyssey</strong></h2>
            <p>
              Join Captain Zara and her diverse crew as they embark on a
              daring mission to explore unknown galaxies, encounter alien
              civilizations, and confront the mysteries of the cosmos.
            </p>
          </StoryBox>
        </StoriesSection>

        {/* Animated Sparkles */}
        {generateSparkles()}

        {/* About Section */}
        <AboutSection>
          <h3>About the Site</h3>
          <p>
            StoryVerse is a platform where storytellers and readers come
            together to create, explore, and experience interactive fiction
            like never before.
          </p>
        </AboutSection>
      </Container>
    </ThemeProvider>
  );
};

export default LandingPage;
