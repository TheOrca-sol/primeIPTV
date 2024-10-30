import styled from 'styled-components';
import { motion } from 'framer-motion';

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

const testimonials = [
  {
    quote: "Best IPTV service I've used. Crystal clear HD quality and never buffers. Customer support is always responsive!",
    name: "John D.",
    location: "United States",
    flag: "🇺🇸",
    initials: "JD"
  },
  {
    quote: "Excellent channel selection and VOD library. The 4K content is amazing, and setup was super easy.",
    name: "Sarah M.",
    location: "United Kingdom",
    flag: "🇬🇧",
    initials: "SM"
  },
  {
    quote: "Service parfait avec des chaînes françaises en HD. Le support client est très réactif.",
    name: "Pierre L.",
    location: "France",
    flag: "🇫🇷",
    initials: "PL"
  }
];

function Testimonials() {
  return (
    <TestimonialsContainer>
      <Title>What Our Customers Say</Title>
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
              <Avatar>{testimonial.initials}</Avatar>
              <CustomerDetails>
                <CustomerName>{testimonial.name}</CustomerName>
                <CustomerLocation>
                  {testimonial.flag} {testimonial.location}
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