import styled from 'styled-components';
import Banner from '../components/home/Banner';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import SEO from '../components/common/SEO';
const HomePage = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

function Home() {
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IPTV Beam",
    "description": "Premium IPTV service providing access to 10,000+ live TV channels, movies, and sports events worldwide.",
    "url": "https://iptvbeam.com",
    "logo": "https://iptvbeam.com/logo192.png",
    "sameAs": [
      "https://iptvbeam.com"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+212694461807",
      "contactType": "customer service",
      "areaServed": "Worldwide",
      "availableLanguage": ["English", "French", "Arabic"]
    },
    "service": {
      "@type": "Service",
      "name": "IPTV Streaming Service",
      "description": "Premium IPTV service with HD/4K quality, zero buffering, and 24/7 support",
      "provider": {
        "@type": "Organization",
        "name": "IPTV Beam"
      }
    }
  };

  return (
    <HomePage>
      <SEO 
        title="IPTV Beam – Premium IPTV Service & 10,000+ Live Channels"
        description="Stream thousands of live TV channels, movies and sports in HD/4K quality. Zero buffering, multi-device support and 24/7 customer service."
        keywords="IPTV service, live TV streaming, premium IPTV, HD channels, 4K streaming, sports channels, movie channels, international TV"
        canonical="https://iptvbeam.com/"
        structuredData={homeStructuredData}
      />
      <Banner />
      <Features />
      <Testimonials />
    </HomePage>
  );
}

export default Home;