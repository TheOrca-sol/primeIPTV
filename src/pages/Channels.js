import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import { useTranslation } from 'react-i18next';

const ChannelsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled(motion.h1)`
  text-align: center;
  color: ${props => props.theme.colors.text};
  margin-bottom: 3rem;
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, #4F46E5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CategoryTabs = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  overflow-x: auto;
  padding-bottom: 1rem;
  
  @media (max-width: 768px) {
    flex-wrap: nowrap;
    -webkit-overflow-scrolling: touch;
  }
`;

const CategoryTab = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  background: ${props => props.active ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.active ? 'white' : props.theme.colors.text};
  border: 2px solid ${props => props.active ? props.theme.colors.primary : 'transparent'};
  border-radius: 12px;
  cursor: pointer;
  font-weight: ${props => props.active ? '600' : '400'};
  white-space: nowrap;
  
  &:hover {
    background: ${props => props.active ? props.theme.colors.primary : 'rgba(37, 99, 235, 0.1)'};
  }
`;

const ChannelGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 1rem 0;
`;

const ChannelCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
    border-color: ${props => props.theme.colors.primary}40;
  }
`;

const ChannelName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.text};
  font-weight: 600;
`;

const ChannelInfo = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.textLight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
`;

const QualityTag = styled.span`
  background: ${props => props.theme.colors.primary}15;
  color: ${props => props.theme.colors.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const SearchBar = styled.input`
  width: 100%;
  max-width: 500px;
  margin: 0 auto 2rem;
  display: block;
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px ${props => props.theme.colors.primary}20;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const PageButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: none;
  background: ${props => props.theme.colors.primary};
  color: white;
  cursor: pointer;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const PageInfo = styled.span`
  color: ${props => props.theme.colors.text};
`;

const LoadingSpinner = styled.div`
  // Add loading spinner styles
`;

const InfoBanner = styled(motion.div)`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, #4F46E5);
  color: white;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const InfoTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const InfoText = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ChannelStats = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
`;

const StatItem = styled.div`
  text-align: center;
  
  span {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  
  small {
    opacity: 0.9;
  }
`;

const CategoryGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 1rem 0;
`;

const CategoryCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
    border-color: ${props => props.theme.colors.primary}40;
  }
`;

const CTAButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  white-space: nowrap;
  
  &:hover {
    background: ${props => props.theme.colors.primary}40;
  }
`;

const CTASection = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

function Channels() {
  const { t } = useTranslation();
  const channelsStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "IPTV Beam Channels & Categories",
    "description": "Discover sports, movies, entertainment and international channels included in IPTV Beam. All channels available in HD and 4K quality.",
    "url": "https://iptvbeam.com/channels",
    "mainEntity": {
      "@type": "ItemList",
      "name": "IPTV Channel Categories",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Sports Channels",
          "description": "ESPN, Sky Sports, beIN Sports, and all PPV events"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Movies & Series",
          "description": "Netflix, HBO, Disney+, Amazon Prime, and more"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Entertainment",
          "description": "ABC, NBC, CBS, FOX, and international networks"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "International",
          "description": "UK, Arabic, Indian, Turkish, French channels"
        }
      ]
    }
  };

  return (
    <ChannelsContainer>
      <SEO 
        title="Channels & Categories – Explore 10,000+ IPTV Channels"
        description="Discover sports, movies, entertainment and international channels included in IPTV Beam. All channels available in HD and 4K quality."
        keywords="IPTV channels, live TV channels, sports channels, movie channels, international channels, HD channels, 4K channels"
        canonical="https://iptvbeam.com/channels"
        structuredData={channelsStructuredData}
      />
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
{t('channels.title')}
      </Title>

      <InfoBanner
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <InfoTitle>{t('channels.subtitle', { count: '10,000' })}</InfoTitle>
        <InfoText>
          {t('channels.description')}
        </InfoText>
        <ChannelStats>
          <StatItem>
            <span>{t('channels.stats.channels', { count: '10,000' })}</span>
            <small>{t('channels.stats.channelsLabel')}</small>
          </StatItem>
          <StatItem>
            <span>{t('channels.stats.quality')}</span>
            <small>{t('channels.stats.qualityLabel')}</small>
          </StatItem>
          <StatItem>
            <span>{t('channels.stats.countries', { count: '100' })}</span>
            <small>{t('channels.stats.countriesLabel')}</small>
          </StatItem>
          <StatItem>
            <span>{t('channels.stats.support')}</span>
            <small>{t('channels.stats.supportLabel')}</small>
          </StatItem>
        </ChannelStats>
      </InfoBanner>

      <CategoryGrid>
        <CategoryCard
          whileHover={{ y: -5, boxShadow: '0 8px 12px rgba(0,0,0,0.1)' }}
        >
          <h3>{t('channels.categories.sports.title')}</h3>
          <p>{t('channels.categories.sports.description')}</p>
        </CategoryCard>
        <CategoryCard
          whileHover={{ y: -5, boxShadow: '0 8px 12px rgba(0,0,0,0.1)' }}
        >
          <h3>{t('channels.categories.movies.title')}</h3>
          <p>{t('channels.categories.movies.description')}</p>
        </CategoryCard>
        <CategoryCard
          whileHover={{ y: -5, boxShadow: '0 8px 12px rgba(0,0,0,0.1)' }}
        >
          <h3>{t('channels.categories.entertainment.title')}</h3>
          <p>{t('channels.categories.entertainment.description')}</p>
        </CategoryCard>
        <CategoryCard
          whileHover={{ y: -5, boxShadow: '0 8px 12px rgba(0,0,0,0.1)' }}
        >
          <h3>{t('channels.categories.international.title')}</h3>
          <p>{t('channels.categories.international.description')}</p>
        </CategoryCard>
      </CategoryGrid>

      <CTASection>
        <h2>{t('channels.cta.title')}</h2>
        <p>{t('channels.cta.description', { 
          supportLink: <Link to="/support" style={{ color: '#2563eb', textDecoration: 'underline' }}>{t('channels.cta.supportLink')}</Link>
        })}</p>
        <CTAButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = '/pricing'}
        >
          {t('channels.cta.button')}
        </CTAButton>
      </CTASection>
    </ChannelsContainer>
  );
}

export default Channels;
