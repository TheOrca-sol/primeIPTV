import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { trackSuccessfulReferral, logDebug } from '../utils/referral';
import ReferralModal from '../components/common/ReferralModal';
import SEO from '../components/common/SEO';

const PricingContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  text-align: center;
  color: ${props => props.theme.colors.text};
  margin-bottom: 3rem;
  font-size: 2.5rem;
`;

const PlansGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const PlanCard = styled(motion.div)`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  height: 100%;
  justify-content: space-between;
  
  ${props => props.popular && `
    border: 2px solid ${props.theme.colors.primary};
    &::before {
      content: 'Most Popular';
      position: absolute;
      top: 1.5rem;
      right: -4rem;
      background: ${props.theme.colors.primary};
      color: white;
      padding: 0.5rem 4rem;
      transform: rotate(45deg);
      font-size: 0.8rem;
      font-weight: bold;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  `}
`;

const PlanContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex: 1;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: auto;
  padding-top: 1rem;
`;

const PlanName = styled.h2`
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const PlanPrice = styled.div`
  color: ${props => props.theme.colors.primary};
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  
  span {
    font-size: 1rem;
    color: ${props => props.theme.colors.text};
    opacity: 0.7;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  margin: 2rem 0;
  padding: 0;
  text-align: left;
  width: 100%;
`;

const Feature = styled.li`
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
  
  &::before {
    content: "✓";
    color: ${props => props.theme.colors.primary};
    margin-right: 0.5rem;
    font-weight: bold;
  }
`;

const SubscribeButton = styled(motion.button)`
  background: ${props => props.primary ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.primary ? 'white' : props.theme.colors.primary};
  border: 2px solid ${props => props.theme.colors.primary};
  padding: 1rem 2rem;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const PeriodSelector = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const PeriodButton = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  border: 2px solid ${props => props.theme.colors.primary};
  background: ${props => props.active ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.active ? 'white' : props.theme.colors.primary};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: ${props => props.active ? 'bold' : 'normal'};

  &:hover {
    transform: translateY(-2px);
  }
`;

const SaveBadge = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: ${props => props.theme.colors.accent};
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: bold;
`;

const ReferralBanner = styled(motion.div)`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, #FF8E53);
  color: white;
  padding: 1rem;
  text-align: center;
  border-radius: 12px;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
`;

const ReferralButton = styled(motion.button)`
  background: white;
  color: ${props => props.theme.colors.primary};
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  font-weight: bold;
  margin-left: 1rem;
  cursor: pointer;
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
  opacity: 0.6;
  font-size: 0.8em;
  margin-left: 0.5rem;
  color: ${props => props.theme.colors.text};
`;

const plansData = {
  monthly: [
    {
      name: "Basic",
      price: "9.99",
      period: "month",
      features: [
        "1000+ Live Channels",
        "HD Quality",
        "7 Days Catchup",
        "1 Device",
        "24/7 Support"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "12.99",
      period: "month",
      features: [
        "2000+ Live Channels",
        "HD & 4K Quality",
        "14 Days Catchup",
        "1 Device",
        "24/7 Priority Support",
        "PPV Events Included"
      ],
      popular: true
    },
    {
      name: "Family",
      price: "19.99",
      period: "month",
      features: [
        "3000+ Live Channels",
        "HD & 4K Quality",
        "30 Days Catchup",
        "1 Device",
        "24/7 VIP Support",
        "PPV Events Included",
        "Custom Channel List"
      ],
      popular: false
    }
  ],
  quarterly: [
    {
      name: "Basic",
      price: "24.99",
      period: "quarter",
      originalPrice: "29.97",
      features: [
        "1000+ Live Channels",
        "HD Quality",
        "7 Days Catchup",
        "1 Device",
        "24/7 Support"
      ],
      popular: false,
      savings: "17%"
    },
    {
      name: "Premium",
      price: "29.99",
      period: "quarter",
      originalPrice: "38.97",
      features: [
        "2000+ Live Channels",
        "HD & 4K Quality",
        "14 Days Catchup",
        "1 Device",
        "24/7 Priority Support",
        "PPV Events Included"
      ],
      popular: true,
      savings: "23%"
    },
    {
      name: "Family",
      price: "44.99",
      period: "quarter",
      originalPrice: "59.97",
      features: [
        "3000+ Live Channels",
        "HD & 4K Quality",
        "30 Days Catchup",
        "1 Device",
        "24/7 VIP Support",
        "PPV Events Included",
        "Custom Channel List"
      ],
      popular: false,
      savings: "25%"
    }
  ],
  yearly: [
    {
      name: "Basic",
      price: "49.99",
      period: "year",
      originalPrice: "119.88",
      features: [
        "1000+ Live Channels",
        "HD Quality",
        "7 Days Catchup",
        "1 Device",
        "24/7 Support"
      ],
      popular: false,
      savings: "58%"
    },
    {
      name: "Premium",
      price: "69.99",
      period: "year",
      originalPrice: "155.88",
      features: [
        "2000+ Live Channels",
        "HD & 4K Quality",
        "14 Days Catchup",
        "1 Device",
        "24/7 Priority Support",
        "PPV Events Included"
      ],
      popular: true,
      savings: "55%"
    },
    {
      name: "Family",
      price: "99.99",
      period: "year",
      originalPrice: "239.88",
      features: [
        "3000+ Live Channels",
        "HD & 4K Quality",
        "30 Days Catchup",
        "1 Device",
        "24/7 VIP Support",
        "PPV Events Included",
        "Custom Channel List"
      ],
      popular: false,
      savings: "58%"
    }
  ]
};

// Add WhatsApp icon component
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);


function Pricing() {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');
  const [showReferralModal, setShowReferralModal] = useState(false);
  const [hasReferralDiscount, setHasReferralDiscount] = useState(false);
  
  useEffect(() => {
    logDebug('Pricing component mounted');
    const referralCode = localStorage.getItem('primeiptv_referral');
    logDebug('Checking stored referral:', referralCode);
    setHasReferralDiscount(!!referralCode);
  }, []);

  // Add this function to apply referral discount
  const getDiscountedPrice = (originalPrice) => {
    return hasReferralDiscount ? originalPrice * 0.5 : originalPrice;
  };

  const handleSubscribe = (plan, period) => {
    const phoneNumber = "+212694461807";
    const referralCode = localStorage.getItem('primeiptv_referral');
    
    // Track successful referral when user subscribes
    if (referralCode) {
      trackSuccessfulReferral(referralCode);
    }
    
    let message = `Hello! I would like to subscribe to the ${plan.name} plan (${period}):
- Price: $${plan.price}/${plan.period}
- Features: ${plan.features.join(', ')}`;

    if (referralCode) {
      message += `\nReferral Code: ${referralCode}`;
    }
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "IPTV Beam Pricing Plans",
    "description": "Compare our Basic, Premium and Family IPTV plans. Enjoy affordable monthly, quarterly or yearly subscriptions with catch-up, 4K quality and pay-per-view events.",
    "url": "https://iptvbeam.com/pricing",
    "mainEntity": {
      "@type": "Product",
      "name": "IPTV Beam Service",
      "offers": [
        {
          "@type": "Offer",
          "name": "Basic Plan",
          "price": "9.99",
          "priceCurrency": "USD",
          "priceValidUntil": "2025-12-31",
          "availability": "https://schema.org/InStock",
          "description": "1000+ Live Channels, HD Quality, 7 Days Catchup, 1 Device, 24/7 Support"
        },
        {
          "@type": "Offer",
          "name": "Premium Plan",
          "price": "12.99",
          "priceCurrency": "USD",
          "priceValidUntil": "2025-12-31",
          "availability": "https://schema.org/InStock",
          "description": "2000+ Live Channels, HD & 4K Quality, 14 Days Catchup, 1 Device, 24/7 Priority Support, PPV Events Included"
        },
        {
          "@type": "Offer",
          "name": "Family Plan",
          "price": "19.99",
          "priceCurrency": "USD",
          "priceValidUntil": "2025-12-31",
          "availability": "https://schema.org/InStock",
          "description": "3000+ Live Channels, HD & 4K Quality, 30 Days Catchup, 1 Device, 24/7 VIP Support, PPV Events Included, Custom Channel List"
        }
      ]
    }
  };

  return (
    <PricingContainer>
      <SEO 
        title="IPTV Beam Pricing – Choose Your Plan & Start Watching Today"
        description="Compare our Basic, Premium and Family IPTV plans. Enjoy affordable monthly, quarterly or yearly subscriptions with catch-up, 4K quality and pay-per-view events."
        keywords="IPTV pricing, IPTV plans, IPTV subscription, cheap IPTV, premium IPTV service, IPTV packages"
        canonical="https://iptvbeam.com/pricing"
        structuredData={pricingStructuredData}
      />
      <ReferralBanner
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🎁 Invite friends and get 1 Month Free! They'll receive 50% OFF their first month!
        <ReferralButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowReferralModal(true)}
        >
          Share & Earn
        </ReferralButton>
      </ReferralBanner>

      <Title>Choose Your Plan</Title>
      <PeriodSelector>
        <PeriodButton 
          active={selectedPeriod === 'monthly'} 
          onClick={() => setSelectedPeriod('monthly')}
        >
          Monthly
        </PeriodButton>
        <PeriodButton 
          active={selectedPeriod === 'quarterly'} 
          onClick={() => setSelectedPeriod('quarterly')}
        >
          Quarterly
        </PeriodButton>
        <PeriodButton 
          active={selectedPeriod === 'yearly'} 
          onClick={() => setSelectedPeriod('yearly')}
        >
          Yearly
        </PeriodButton>
      </PeriodSelector>
      <PlansGrid>
        {plansData[selectedPeriod].map((plan, index) => (
          <PlanCard
            key={index}
            popular={plan.popular}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <PlanContent>
              {plan.savings && <SaveBadge>Save {plan.savings}</SaveBadge>}
              <PlanName>{plan.name}</PlanName>
              <PlanPrice>
                ${getDiscountedPrice(plan.price)}
                {hasReferralDiscount && (
                  <OriginalPrice>${plan.price}</OriginalPrice>
                )}
              </PlanPrice>
              <FeaturesList>
                {plan.features.map((feature, idx) => (
                  <Feature key={idx}>{feature}</Feature>
                ))}
              </FeaturesList>
            </PlanContent>
            <ButtonWrapper>
              <SubscribeButton
                primary={plan.popular}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSubscribe(plan, selectedPeriod)}
              >
                <WhatsAppIcon />
                Subscribe via WhatsApp
              </SubscribeButton>
            </ButtonWrapper>
          </PlanCard>
        ))}
      </PlansGrid>

      <ReferralModal 
        isOpen={showReferralModal} 
        onClose={() => setShowReferralModal(false)} 
      />
    </PricingContainer>
  );
}

export default Pricing;
