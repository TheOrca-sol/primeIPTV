import styled from 'styled-components';
import { motion } from 'framer-motion';
import { getReferralRewards } from '../../utils/referral';

const BannerContainer = styled(motion.div)`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, #FF8E53);
  color: white;
  padding: 1rem;
  text-align: center;
  position: relative;
`;

const RewardText = styled.span`
  font-weight: bold;
  color: #FFE156;
`;

function ReferralBanner() {
  const rewards = getReferralRewards();
  
  return (
    <BannerContainer
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      🎁 Invite friends and get {rewards.referrer}! They'll receive {rewards.referred}!
    </BannerContainer>
  );
}

export default ReferralBanner; 