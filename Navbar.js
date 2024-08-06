import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <Logo>AHIB Industries</Logo>
      <Menu>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/services">Services</NavItem>
        <NavItem to="/portfolio">Portfolio</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav\`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: #fff;
\`;

const Logo = styled.h1\`
  font-size: 1.5rem;
\`;

const Menu = styled.div\`
  display: flex;
\`;

const NavItem = styled(Link)\`
  margin-left: 1rem;
  text-decoration: none;
  color: #fff;
  &:hover {
    color: #f39c12;
  }
\`;

export default Navbar;
