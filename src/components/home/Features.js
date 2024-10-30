import styled from 'styled-components';
import { motion } from 'framer-motion';

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
`;

const features = [
  {
    icon: "📺",
    title: "10,000+ Channels",
    description: "Access to premium channels from USA, UK, Canada, and worldwide"
  },
  {
    icon: "🎬",
    title: "Movies & Series",
    description: "Huge VOD library with latest movies and TV shows"
  },
  {
    icon: "📱",
    title: "Multi-Platform",
    description: "Works on Smart TV, Android, iOS, MAG, and Formuler boxes"
  },
  {
    icon: "⚡",
    title: "Premium Quality",
    description: "HD and 4K quality streams with zero buffering"
  },
  {
    icon: "🌍",
    title: "Sports Coverage",
    description: "All major sports channels including PPV events"
  },
  {
    icon: "🎮",
    title: "Easy Setup",
    description: "Quick installation with 24/7 support via WhatsApp"
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
          <FeatureIcon>{feature.icon}</FeatureIcon>
          <FeatureTitle>{feature.title}</FeatureTitle>
          <FeatureDescription>{feature.description}</FeatureDescription>
        </FeatureCard>
      ))}
    </FeaturesGrid>
  );
}

export default Features; 