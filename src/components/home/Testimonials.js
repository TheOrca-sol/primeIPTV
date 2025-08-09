import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const TestimonialsContainer = styled.div`
  max-width: 1200px;
  margin: 4rem auto;
  padding: 2rem;
`;

const Title = styled.h2`
  text-align: center;
  color: ${props => props.theme.colors.text};
  font-size: 2rem;
  margin-bottom: 3rem;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const TestimonialCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.05);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  }
`;

const Quote = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-style: italic;
`;

const CustomerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.theme.colors.primary}20;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
`;

const CustomerDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const CustomerName = styled.span`
  font-weight: 600;
  color: ${props => props.theme.colors.text};
`;

const CustomerLocation = styled.span`
  color: ${props => props.theme.colors.text};
  opacity: 0.7;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

// Testimonials data is now handled in the component using translations

function Testimonials() {
  const { t } = useTranslation();

  // Get testimonials from translations - this allows for dynamic testimonials per language
  const testimonials = t('testimonials.items', { returnObjects: true });

  return (
    <TestimonialsContainer>
      <Title>{t('testimonials.title')}</Title>
      <TestimonialsGrid>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Quote>"{testimonial.quote}"</Quote>
            <CustomerInfo>
              <Avatar>{testimonial.name.charAt(0)}{testimonial.name.split(' ')[1]?.charAt(0) || ''}</Avatar>
              <CustomerDetails>
                <CustomerName>{testimonial.name}</CustomerName>
                <CustomerLocation>
                  {testimonial.location}
                </CustomerLocation>
              </CustomerDetails>
            </CustomerInfo>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
    </TestimonialsContainer>
  );
}

export default Testimonials; 