import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2024 AHIB Industries. All rights reserved.</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer\`
  padding: 1rem;
  text-align: center;
  background-color: #333;
  color: #fff;
\`;

export default Footer;
