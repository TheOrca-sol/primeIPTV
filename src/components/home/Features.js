import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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

const features = [
  {
    icon: "📺",
    title: "10,000+ Channels",
    description: "Access to premium channels from USA, UK, Canada, and worldwide",
    link: "/channels",
    linkText: "Explore our channel list"
  },
  {
    icon: "🎬",
    title: "Movies & Series",
    description: "Huge VOD library with latest movies and TV shows in HD and 4K",
    link: "/channels",
    linkText: "Browse movie channels"
  },
  {
    icon: "📱",
    title: "Multi-Platform",
    description: "Works on Smart TV, Android, iOS, MAG, and Formuler boxes",
    link: "/support",
    linkText: "View setup guides"
  },
  {
    icon: "⚡",
    title: "Premium Quality",
    description: "HD and 4K quality streams with zero buffering guaranteed",
    link: "/pricing",
    linkText: "Check our plans"
  },
  {
    icon: "🌍",
    title: "Sports Coverage",
    description: "All major sports channels including PPV events and live matches",
    link: "/channels",
    linkText: "See sports channels"
  },
  {
    icon: "🎮",
    title: "Easy Setup",
    description: "Quick installation with 24/7 support via WhatsApp",
    link: "/support",
    linkText: "Get help now"
  }
];

function Features() {
  return (
    <FeaturesGrid>
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <FeatureIcon role="img" aria-label={feature.title}>{feature.icon}</FeatureIcon>
          <FeatureTitle>{feature.title}</FeatureTitle>
          <FeatureDescription>{feature.description}</FeatureDescription>
          <FeatureLink to={feature.link}>{feature.linkText} →</FeatureLink>
        </FeatureCard>
      ))}
    </FeaturesGrid>
  );
}

export default Features; 