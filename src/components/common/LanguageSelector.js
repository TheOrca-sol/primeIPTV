import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const LanguageDropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const LanguageButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: transparent;
  border: 1px solid rgba(37, 99, 235, 0.2);
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text};
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    background: rgba(37, 99, 235, 0.05);
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
`;

const LanguageMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  min-width: 200px;
  overflow: hidden;
`;

const LanguageOption = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.75rem 1rem;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text};
  transition: background 0.2s ease;

  &:hover {
    background: rgba(37, 99, 235, 0.05);
  }

  &.active {
    background: rgba(37, 99, 235, 0.1);
    color: ${props => props.theme.colors.primary};
    font-weight: 600;
  }
`;

const Flag = styled.span`
  font-size: 1.2rem;
  min-width: 20px;
`;

const LanguageName = styled.span`
  flex: 1;
`;

const CurrentFlag = styled.span`
  font-size: 1rem;
`;

const ChevronIcon = styled(motion.span)`
  font-size: 0.8rem;
  color: ${props => props.theme.colors.text};
  opacity: 0.6;
`;

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'da', name: 'Dansk', flag: '🇩🇰' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'ar', name: 'العربية', flag: '🇲🇦' }
];

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
    
    // Update document direction for Arabic
    document.dir = languageCode === 'ar' ? 'rtl' : 'ltr';
    
    // Store language preference
    localStorage.setItem('preferred-language', languageCode);
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('[data-language-selector]')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isOpen]);

  // Set initial direction on mount
  React.useEffect(() => {
    document.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <LanguageDropdown data-language-selector>
      <LanguageButton onClick={toggleDropdown}>
        <CurrentFlag>{currentLanguage.flag}</CurrentFlag>
        <span style={{ display: window.innerWidth > 768 ? 'inline' : 'none' }}>
          {currentLanguage.name}
        </span>
        <ChevronIcon
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          ▼
        </ChevronIcon>
      </LanguageButton>

      <AnimatePresence>
        {isOpen && (
          <LanguageMenu
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {languages.map((language) => (
              <LanguageOption
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={language.code === i18n.language ? 'active' : ''}
              >
                <Flag>{language.flag}</Flag>
                <LanguageName>{language.name}</LanguageName>
                {language.code === i18n.language && (
                  <span style={{ color: '#2563eb', fontSize: '0.8rem' }}>✓</span>
                )}
              </LanguageOption>
            ))}
          </LanguageMenu>
        )}
      </AnimatePresence>
    </LanguageDropdown>
  );
}

export default LanguageSelector;
