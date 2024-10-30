export const REFERRAL_STORAGE_KEY = 'primeiptv_referral';
export const REFERRAL_STATS_KEY = 'primeiptv_referral_stats';
export const SUCCESSFUL_REFERRALS_KEY = 'primeiptv_successful_referrals';

// Add debug logging utility
const DEBUG = true;
export const logDebug = (message, data = null) => {
  if (DEBUG) {
    console.group('🔍 Referral Debug');
    console.log(message);
    if (data) console.log(data);
    console.groupEnd();
  }
};

export const handleReferral = () => {
  logDebug('Handling referral, current URL:', window.location.href);
  
  // Check URL params first
  const urlParams = new URLSearchParams(window.location.search);
  const referralCode = urlParams.get('ref');
  logDebug('URL referral code:', referralCode);
  
  // If we already have this referral code stored, don't process again
  const storedReferralCode = localStorage.getItem(REFERRAL_STORAGE_KEY);
  if (referralCode && referralCode === storedReferralCode) {
    logDebug('Referral code already processed');
    return true;
  }
  
  if (referralCode) {
    logDebug('Saving referral code to localStorage:', referralCode);
    localStorage.setItem(REFERRAL_STORAGE_KEY, referralCode);
    updateReferralStats(referralCode, 'clicks');
    return true;
  }
  
  if (storedReferralCode) {
    logDebug('Found stored referral, updating URL');
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('ref', storedReferralCode);
    const newUrl = currentUrl.toString();
    logDebug('New URL with referral:', newUrl);
    window.history.replaceState({}, '', newUrl);
    return true;
  }
  
  logDebug('No referral code found');
  return false;
};

export const trackSuccessfulReferral = (referralCode) => {
  if (!referralCode) return;
  
  // Update global stats for the referrer
  const stats = JSON.parse(localStorage.getItem(REFERRAL_STATS_KEY) || '{}');
  if (!stats[referralCode]) {
    stats[referralCode] = { clicks: 0, conversions: 0 };
  }
  stats[referralCode].conversions++;
  localStorage.setItem(REFERRAL_STATS_KEY, JSON.stringify(stats));
  
  // Store this successful referral with timestamp
  const successfulReferrals = JSON.parse(localStorage.getItem(SUCCESSFUL_REFERRALS_KEY) || '[]');
  successfulReferrals.push({
    code: referralCode,
    date: new Date().toISOString(),
    rewardClaimed: false
  });
  localStorage.setItem(SUCCESSFUL_REFERRALS_KEY, JSON.stringify(successfulReferrals));
};

const updateReferralStats = (referralCode, type) => {
  const stats = JSON.parse(localStorage.getItem(REFERRAL_STATS_KEY) || '{}');
  if (!stats[referralCode]) {
    stats[referralCode] = { clicks: 0, conversions: 0 };
  }
  stats[referralCode][type]++;
  localStorage.setItem(REFERRAL_STATS_KEY, JSON.stringify(stats));
};

export const generateReferralCode = (userIdentifier) => {
  return btoa(userIdentifier + Date.now()).slice(0, 8);
};

export const getReferralRewards = () => {
  const rewards = {
    referrer: '1 Month Free',
    referred: '50% OFF First Month'
  };
  return rewards;
};

export const preserveReferralCode = (path) => {
  const referralCode = localStorage.getItem(REFERRAL_STORAGE_KEY);
  logDebug('Preserving referral code:', { path, referralCode });
  
  if (!referralCode) {
    // Check URL params as fallback
    const urlParams = new URLSearchParams(window.location.search);
    const urlReferralCode = urlParams.get('ref');
    if (urlReferralCode) {
      localStorage.setItem(REFERRAL_STORAGE_KEY, urlReferralCode);
      return `${path}?ref=${urlReferralCode}`;
    }
    return path;
  }
  
  return `${path}${path.includes('?') ? '&' : '?'}ref=${referralCode}`;
}; 