// Google Analytics configuration

// Your actual Google Analytics Measurement ID
export const GA_MEASUREMENT_ID = 'G-PPHHL6ZEFJ';

// Initialize Google Analytics (gtag is already loaded in HTML)
export const initGA = () => {
  // gtag is already loaded in the HTML head, so we just need to ensure it's available
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: title || document.title,
      page_location: url,
    });
  }
};

// Track events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track custom events for your dating app
export const trackDatingEvent = {
  signupInitiated: () => trackEvent('signup_initiated', 'user_engagement'),
  profileViewed: () => trackEvent('profile_viewed', 'user_engagement'),
  matchMade: () => trackEvent('match_made', 'conversion'),
  eventJoined: () => trackEvent('event_joined', 'conversion'),
  chatStarted: () => trackEvent('chat_started', 'user_engagement'),
};

// Declare global gtag function
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
