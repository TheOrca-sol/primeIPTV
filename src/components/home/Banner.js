import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const BannerContainer = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background: linear-gradient(
    135deg,
    ${props => props.theme.colors.background} 0%,
    ${props => props.theme.colors.background} 60%,
    rgba(37, 99, 235, 0.1) 100%
  );
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
    padding: 40px 20px;
  }
`;

const BannerContent = styled.div`
  flex: 1;
  padding-right: 60px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding-right: 0;
    margin-bottom: 40px;
  }
`;

const BannerTitle = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.text};
  line-height: 1.2;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;

const BannerSubtitle = styled(motion.p)`
  font-size: 1.4rem;
  margin-bottom: 40px;
  color: ${props => props.theme.colors.text};
  opacity: 0.8;
  line-height: 1.6;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 1.2rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 20px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

const CTAButton = styled(motion.button)`
  padding: 15px 30px;
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  box-shadow: 0 4px 6px rgba(37, 99, 235, 0.2);
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

const TryButton = styled(CTAButton)`
  background: transparent;
  border: 2px solid ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primary};
  box-shadow: none;
`;

const HighlightSpan = styled.span`
  color: ${props => props.theme.colors.primary};
`;

const StatsContainer = styled(motion.div)`
  display: flex;
  gap: 40px;
  margin-top: 40px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  opacity: 0.8;
`;

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const IllustrationWrapper = styled(motion.div)`
  width: 35%;
  max-width: 400px;
  color: ${props => props.theme.colors.primary};
  border-radius: 20px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 20px;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.02);
    }
  }
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 60%;
    max-width: 300px;
    margin-top: 2rem;
  }
`;

function Banner() {
  const { t } = useTranslation();

  const handleContact = () => {
    const phoneNumber = "+212694461807";
    const message = t('whatsapp.contact');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleTrial = () => {
    const phoneNumber = "+212694461807";
    const message = t('whatsapp.trial');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <BannerContainer>
      <BannerContent>
        <BannerTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <HighlightSpan>IPTV Beam</HighlightSpan> {t('banner.title')}
          <br />{t('banner.subtitle')}
        </BannerTitle>
        <BannerSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('banner.description', {
            channels: '10,000',
            pricingLink: <Link to="/pricing" style={{ color: 'inherit', textDecoration: 'underline' }}>{t('banner.pricingLink')}</Link>
          })}
        </BannerSubtitle>
        <ButtonGroup
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <CTAButton
            onClick={handleContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <WhatsAppIcon /> {t('banner.getStarted')}
          </CTAButton>
          <TryButton
            onClick={handleTrial}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('banner.tryFree')}
          </TryButton>
        </ButtonGroup>
        <StatsContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <StatItem>
            <StatNumber>{t('banner.stats.channels', { count: '10,000' })}</StatNumber>
            <StatLabel>{t('banner.stats.channelsLabel')}</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>{t('banner.stats.uptime', { percent: '99.9' })}</StatNumber>
            <StatLabel>{t('banner.stats.uptimeLabel')}</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>{t('banner.stats.support')}</StatNumber>
            <StatLabel>{t('banner.stats.supportLabel')}</StatLabel>
          </StatItem>
        </StatsContainer>
      </BannerContent>
      
      <IllustrationWrapper
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.img
          src="/tv-mockup.jpg"
          alt="Premium IPTV service streaming on smart TV showing live channels, movies and sports in high definition quality"
          style={{
            filter: 'drop-shadow(0px 10px 20px rgba(37, 99, 235, 0.2))',
            borderRadius: '20px'
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
      </IllustrationWrapper>
    </BannerContainer>
  );
}

export default Banner; 