import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = styled.nav`
  background: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: relative;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  z-index: 100;
`;

const NavLinks = styled(motion.div)`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNavLinks = styled(motion.div)`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    padding: 6rem 2rem 2rem;
    gap: 2rem;
    z-index: 90;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.text};
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 100;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
`;

const HamburgerLine = styled(motion.span)`
  width: 24px;
  height: 2px;
  background: ${props => props.theme.colors.text};
  display: block;
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">PrimeIPTV</Logo>
        
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/channels">Channels</NavLink>
          <NavLink to="/support">Support</NavLink>
        </NavLinks>

        <HamburgerButton onClick={toggleMenu}>
          <HamburgerLine animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }} />
          <HamburgerLine animate={{ opacity: isOpen ? 0 : 1 }} />
          <HamburgerLine animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }} />
        </HamburgerButton>

        <AnimatePresence>
          {isOpen && (
            <MobileNavLinks
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
              <NavLink to="/pricing" onClick={toggleMenu}>Pricing</NavLink>
              <NavLink to="/channels" onClick={toggleMenu}>Channels</NavLink>
              <NavLink to="/support" onClick={toggleMenu}>Support</NavLink>
            </MobileNavLinks>
          )}
        </AnimatePresence>
      </NavContainer>
    </Nav>
  );
}

export default Navbar;