import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  
  return (
    <FooterContainer>
      <FooterContent>
        <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
