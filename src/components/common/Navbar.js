import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  background: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
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
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.text};
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

function Navbar() {
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
      </NavContainer>
    </Nav>
  );
}

export default Navbar;