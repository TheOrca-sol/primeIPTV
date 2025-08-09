import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData 
}) => {
  const { i18n } = useTranslation();
  const defaultTitle = "IPTV Beam - Premium IPTV Service & 10,000+ Live Channels";
  const defaultDescription = "Stream thousands of live TV channels, movies and sports in HD/4K quality. Zero buffering, multi-device support and 24/7 customer service.";
  const defaultKeywords = "IPTV service, live TV streaming, premium IPTV, HD channels, 4K streaming, sports channels, movie channels, international TV";
  const siteUrl = "https://iptvbeam.com";
  const defaultImage = `${siteUrl}/tv-mockup.jpg`;

  const finalTitle = title ? `${title} | IPTV Beam` : defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  const finalCanonical = canonical || siteUrl;
  const finalOgImage = ogImage || defaultImage;

  // Language-specific canonical URLs
  const currentLang = i18n.language || 'en';
  const languages = ['en', 'da', 'de', 'nl', 'ar'];
  
  const getLanguageUrl = (lang) => {
    const baseUrl = finalCanonical.replace(siteUrl, '');
    return lang === 'en' ? `${siteUrl}${baseUrl}` : `${siteUrl}/${lang}${baseUrl}`;
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <link rel="canonical" href={finalCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="IPTV Beam" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={finalCanonical} />
      <meta property="twitter:title" content={finalTitle} />
      <meta property="twitter:description" content={finalDescription} />
      <meta property="twitter:image" content={finalOgImage} />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="IPTV Beam" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content={currentLang === 'en' ? 'English' : currentLang === 'da' ? 'Danish' : currentLang === 'de' ? 'German' : currentLang === 'nl' ? 'Dutch' : 'Arabic'} />
      <meta name="revisit-after" content="7 days" />
      
      {/* Hreflang Tags */}
      {languages.map(lang => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={lang}
          href={getLanguageUrl(lang)}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={getLanguageUrl('en')} />
      
      {/* Mobile Meta Tags */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;

