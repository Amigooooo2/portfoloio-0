import React from 'react';
import styled from 'styled-components';

const Portfolio = () => {
  return (
    <PortfolioPage>
      <h1>Our Portfolio</h1>
      <PortfolioGrid>
        <PortfolioItem>Project 1</PortfolioItem>
        <PortfolioItem>Project 2</PortfolioItem>
        <PortfolioItem>Project 3</PortfolioItem>
      </PortfolioGrid>
    </PortfolioPage>
  );
};

const PortfolioPage = styled.div\`
  padding: 2rem;
  text-align: center;
\`;

const PortfolioGrid = styled.div\`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
\`;

const PortfolioItem = styled.div\`
  background-color: #ddd;
  padding: 1rem;
\`;

export default Portfolio;
