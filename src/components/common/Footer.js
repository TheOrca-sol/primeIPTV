import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: ${props => props.theme.colors.text};
  color: white;
  padding: 3rem 2rem;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <p>&copy; {new Date().getFullYear()} IPTV Beam. All rights reserved.</p>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
