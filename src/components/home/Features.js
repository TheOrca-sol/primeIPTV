import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  padding: 60px 20px;
`;

const FeatureCard = styled(motion.div)`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: ${props => props.theme.colors.text};
`;

const FeatureDescription = styled.p`
  color: ${props => props.theme.colors.text};
  opacity: 0.8;
  margin-bottom: 15px;
`;

const FeatureLink = styled(Link)`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

// Features data is now handled in the component using translations

function Features() {
  const { t } = useTranslation();

  const features = [
    {
      icon: "📺",
      titleKey: "features.items.channels.title",
      descriptionKey: "features.items.channels.description", 
      linkKey: "features.items.channels.link",
      link: "/channels"
    },
    {
      icon: "🎬",
      titleKey: "features.items.movies.title",
      descriptionKey: "features.items.movies.description",
      linkKey: "features.items.movies.link", 
      link: "/channels"
    },
    {
      icon: "📱",
      titleKey: "features.items.multiPlatform.title",
      descriptionKey: "features.items.multiPlatform.description",
      linkKey: "features.items.multiPlatform.link",
      link: "/support"
    },
    {
      icon: "⚡",
      titleKey: "features.items.quality.title", 
      descriptionKey: "features.items.quality.description",
      linkKey: "features.items.quality.link",
      link: "/pricing"
    },
    {
      icon: "🌍",
      titleKey: "features.items.sports.title",
      descriptionKey: "features.items.sports.description", 
      linkKey: "features.items.sports.link",
      link: "/channels"
    },
    {
      icon: "🎮", 
      titleKey: "features.items.setup.title",
      descriptionKey: "features.items.setup.description",
      linkKey: "features.items.setup.link",
      link: "/support"
    }
  ];

  return (
    <FeaturesGrid>
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <FeatureIcon role="img" aria-label={t(feature.titleKey)}>{feature.icon}</FeatureIcon>
          <FeatureTitle>{t(feature.titleKey, { count: '10,000' })}</FeatureTitle>
          <FeatureDescription>{t(feature.descriptionKey)}</FeatureDescription>
          <FeatureLink to={feature.link}>{t(feature.linkKey)} →</FeatureLink>
        </FeatureCard>
      ))}
    </FeaturesGrid>
  );
}

export default Features; 