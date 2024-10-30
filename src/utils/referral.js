const REFERRAL_STORAGE_KEY = 'primeiptv_referral';
const REFERRAL_REWARDS = {
  referrer: '1 Month Free',
  referred: '50% OFF First Month'
};

export const handleReferral = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const referralCode = urlParams.get('ref');
  
  if (referralCode && !localStorage.getItem(REFERRAL_STORAGE_KEY)) {
    localStorage.setItem(REFERRAL_STORAGE_KEY, referralCode);
    return true;
  }
  return false;
};

export const generateReferralCode = (userIdentifier) => {
  return btoa(userIdentifier + Date.now()).slice(0, 8);
};

export const getReferralRewards = () => REFERRAL_REWARDS; 