import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutPage>
      <h1>About Us</h1>
      <p>
        AHIB Industries is dedicated to providing top-notch web and app design, logo design, and social media design services.
      </p>
    </AboutPage>
  );
};

const AboutPage = styled.div\`
  padding: 2rem;
  text-align: center;
\`;

export default About;
