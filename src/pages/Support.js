import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import SEO from '../components/common/SEO';
import { useTranslation } from 'react-i18next';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const SupportContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 80vh;
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

const TabContainer = styled.div`
  margin-bottom: 3rem;
  position: relative;
`;

const TabButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
`;

const TabButton = styled(motion.button)`
  padding: 0.75rem 2rem;
  background: ${props => props.active ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.active ? 'white' : props.theme.colors.text};
  border: 2px solid ${props => props.active ? props.theme.colors.primary : 'transparent'};
  border-radius: 12px;
  cursor: pointer;
  font-weight: ${props => props.active ? '600' : '400'};
  transition: all 0.3s ease;
  min-width: 150px;
  position: relative;
  overflow: hidden;

  &:hover {
    background: ${props => props.active ? props.theme.colors.primary : 'rgba(37, 99, 235, 0.1)'};
    transform: translateY(-2px);
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${props => props.theme.colors.primary};
    transform: scaleX(${props => props.active ? 1 : 0});
    transition: transform 0.3s ease;
  }
`;

const FAQContainer = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  }
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  font-size: 1.1rem;
`;

const Answer = styled(motion.div)`
  margin-top: 1rem;
  color: ${props => props.theme.colors.text};
  opacity: 0.8;
  line-height: 1.6;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
`;

const ExpandIcon = styled(motion.span)`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.primary}15;
  border-radius: 50%;
  color: ${props => props.theme.colors.primary};
`;

const GuideContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const GuideCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  }
`;

const GuideTitle = styled.h3`
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const GuideContent = styled.div`
  color: ${props => props.theme.colors.text};
  opacity: 0.8;
  line-height: 1.6;
`;

const StepsList = styled.ol`
  padding-left: 1.5rem;
  margin-top: 1rem;
`;

const Step = styled.li`
  margin-bottom: 0.5rem;
`;

const ContactContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

const ContactCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.05);
  
  &:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  }
`;

const ContactText = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const WhatsAppButton = styled(motion.button)`
  background: #25D366;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 auto;
  box-shadow: 0 4px 6px rgba(37, 211, 102, 0.2);

  &:hover {
    box-shadow: 0 8px 12px rgba(37, 211, 102, 0.3);
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1 
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

function Support() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('faq');
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  // Get FAQs from translations
  const faqs = t('support.faq', { returnObjects: true, count: '10,000' });

  const supportStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Get setup guides from translations
  const setupGuides = [
    {
      title: t('support.guides.smartTV.title'),
      steps: t('support.guides.smartTV.steps', { returnObjects: true })
    },
    {
      title: t('support.guides.mobile.title'),
      steps: t('support.guides.mobile.steps', { returnObjects: true })
    },
    {
      title: t('support.guides.box.title'),
      steps: t('support.guides.box.steps', { returnObjects: true })
    }
  ];

  const handleWhatsAppContact = () => {
    const phoneNumber = "+212694461807";
    const message = t('whatsapp.support');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <SupportContainer>
      <SEO 
        title="IPTV Beam Support – FAQs, Setup Guides & Contact"
        description="Get help with installation, device setup and account management. Read frequently asked questions or contact our 24/7 support via WhatsApp."
        keywords="IPTV support, IPTV help, IPTV setup guide, IPTV FAQ, IPTV customer service, IPTV installation"
        canonical="https://iptvbeam.com/support"
        structuredData={supportStructuredData}
      />
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
{t('support.title')}
      </Title>
      
      <TabContainer>
        <TabButtons>
          {[
            { key: 'faq', label: t('support.tabs.faq') },
            { key: 'contactus', label: t('support.tabs.contact') },
            { key: 'setupguides', label: t('support.tabs.guides') }
          ].map((tab) => (
            <TabButton
              key={tab.key}
              active={activeTab === tab.key}
              onClick={() => setActiveTab(tab.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.label}
            </TabButton>
          ))}
        </TabButtons>
      </TabContainer>

      <AnimatePresence mode="wait">
        {activeTab === 'faq' && (
          <FAQContainer
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                variants={itemVariants}
                onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
              >
                <Question>
                  {faq.question}
                  <ExpandIcon
                    animate={{ rotate: expandedFAQ === index ? 180 : 0 }}
                  >
                    {expandedFAQ === index ? '−' : '+'}
                  </ExpandIcon>
                </Question>
                <AnimatePresence>
                  {expandedFAQ === index && (
                    <Answer
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </Answer>
                  )}
                </AnimatePresence>
              </FAQItem>
            ))}
          </FAQContainer>
        )}

        {activeTab === 'contactus' && (
          <ContactContainer>
            <ContactCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3>{t('support.contact.title')}</h3>
              <ContactText>
                {t('support.contact.description')}
              </ContactText>
              <WhatsAppButton
                onClick={handleWhatsAppContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <WhatsAppIcon /> {t('support.contact.button')}
              </WhatsAppButton>
            </ContactCard>
            
            <ContactCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ContactText>
                <strong>{t('support.contact.info.title')}</strong>
                <br /><br />
                {t('support.contact.info.responseTime')}
                <br />
                {t('support.contact.info.hours')}
                <br />
                {t('support.contact.info.languages')}
                <br />
                {t('support.contact.info.platform')}
              </ContactText>
            </ContactCard>
          </ContactContainer>
        )}

        {activeTab === 'setupguides' && (
          <GuideContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {setupGuides.map((guide, index) => (
              <GuideCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GuideTitle>{guide.title}</GuideTitle>
                <GuideContent>
                  <StepsList>
                    {guide.steps.map((step, stepIndex) => (
                      <Step key={stepIndex}>{step}</Step>
                    ))}
                  </StepsList>
                </GuideContent>
              </GuideCard>
            ))}
          </GuideContainer>
        )}
      </AnimatePresence>
    </SupportContainer>
  );
}

export default Support;
