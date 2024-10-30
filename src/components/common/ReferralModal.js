import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { generateReferralCode, getReferralRewards, REFERRAL_STATS_KEY } from '../../utils/referral';
import { FaWhatsapp, FaTelegram, FaFacebook, FaTwitter, FaEnvelope, FaCopy } from 'react-icons/fa';
import { Snackbar, Alert } from '@mui/material';
import { useState } from 'react';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const CopyIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
  </svg>
);

const ShareIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
  </svg>
);

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  width: 90%;
  max-width: 500px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RewardCard = styled.div`
  background: ${props => `${props.theme.colors.primary}10`};
  border: 2px dashed ${props => props.theme.colors.primary};
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  width: 100%;
`;

const ShareOptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
  margin: 1.5rem 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ShareOption = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  background: ${props => props.bg || props.theme.colors.primary};
  color: white;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const ReferralStats = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(0,0,0,0.1);
  width: 100%;
`;

const StatItem = styled.div`
  flex: 1;
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text};
  opacity: 0.7;
`;

function ReferralModal({ isOpen, onClose }) {
  const rewards = getReferralRewards();
  const referralCode = generateReferralCode('user');
  const referralLink = `${window.location.origin}?ref=${referralCode}`;
  
  // Get stats from localStorage with proper structure
  const allStats = JSON.parse(localStorage.getItem('primeiptv_referral_stats') || '{}');
  
  // Calculate totals across all referral codes
  const totalStats = Object.values(allStats).reduce((acc, stat) => {
    acc.clicks += stat.clicks || 0;
    acc.conversions += stat.conversions || 0;
    return acc;
  }, { clicks: 0, conversions: 0 });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleShare = async (platform) => {
    const stats = JSON.parse(localStorage.getItem(REFERRAL_STATS_KEY) || '{}');
    if (!stats[referralCode]) {
      stats[referralCode] = { clicks: 0, conversions: 0 };
    }
    stats[referralCode].clicks += 1;
    localStorage.setItem(REFERRAL_STATS_KEY, JSON.stringify(stats));

    const shareText = `Get 50% OFF your first month of Premium IPTV! 📺 10,000+ channels, movies & sports in HD quality.`;

    switch (platform) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(`${shareText} ${referralLink}`)}`, '_blank');
        break;
      case 'telegram':
        window.open(`https://t.me/share/url?url=${referralLink}&text=${encodeURIComponent(shareText)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${shareText} ${referralLink}`)}`, '_blank');
        break;
      case 'email':
        window.location.href = `mailto:?subject=Premium IPTV Offer&body=${encodeURIComponent(`${shareText}\n\n${referralLink}`)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(`${referralLink}`);
        setOpenSnackbar(true);
        break;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <ModalContent
            onClick={e => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <h2>Share & Earn Rewards! 🎁</h2>
            <RewardCard>
              <p>You'll get: <strong>{rewards.referrer}</strong></p>
              <p>Your friends get: <strong>{rewards.referred}</strong></p>
            </RewardCard>
            
            <ShareOptionsGrid>
              <ShareOption 
                bg="#25D366"
                onClick={() => handleShare('whatsapp')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp /> WhatsApp
              </ShareOption>
              <ShareOption
                bg="#0088cc"
                onClick={() => handleShare('telegram')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTelegram /> Telegram
              </ShareOption>
              <ShareOption
                bg="#1877f2"
                onClick={() => handleShare('facebook')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFacebook /> Facebook
              </ShareOption>
              <ShareOption
                bg="#1da1f2"
                onClick={() => handleShare('twitter')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTwitter /> Twitter
              </ShareOption>
              <ShareOption
                bg="#ea4335"
                onClick={() => handleShare('email')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope /> Email
              </ShareOption>
              <ShareOption
                bg="#666"
                onClick={() => handleShare('copy')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaCopy /> Copy Link
              </ShareOption>
            </ShareOptionsGrid>

            <ReferralStats>
              <StatItem>
                <StatValue>{totalStats.clicks}</StatValue>
                <StatLabel>Total Shares</StatLabel>
              </StatItem>
              <StatItem>
                <StatValue>{totalStats.conversions}</StatValue>
                <StatLabel>Successful Referrals</StatLabel>
              </StatItem>
            </ReferralStats>
          </ModalContent>
        </ModalOverlay>
      )}
      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={3000} 
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setOpenSnackbar(false)} 
          severity="success" 
          variant="filled"
          sx={{ width: '100%' }}
        >
          Referral link copied to clipboard!
        </Alert>
      </Snackbar>
    </AnimatePresence>
  );
}

export default ReferralModal; 