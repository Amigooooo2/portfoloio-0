import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <HomePage>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to AHIB Industries
      </motion.h1>
      <p>Your one-stop solution for web and app design, logo design, and more.</p>
    </HomePage>
  );
};

const HomePage = styled.div\`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f4f4f4;
\`;

export default Home;
