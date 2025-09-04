import ReactGA from "react-ga4";

// Your actual GA4 measurement ID
const GA_MEASUREMENT_ID = "G-PPHHL6ZEFJ";

// Initialize GA with your measurement ID
export const initGA = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID, {
    gtagOptions: {
      anonymize_ip: true, // Anonymize IP for privacy compliance
    },
  });
  
  console.log("Google Analytics initialized with ID:", GA_MEASUREMENT_ID);
};

// Track page views
export const logPageView = (path: string, title?: string) => {
  ReactGA.send({ 
    hitType: "pageview", 
    page: path,
    title: title || document.title 
  });
  
  console.log("GA Page View Tracked:", path);
};

// Track events
export const logEvent = (action: string, category: string, label?: string, value?: number) => {
  ReactGA.event({
    action,
    category,
    label,
    value,
  });
  
  console.log("GA Event Tracked:", { action, category, label, value });
};

// Specific tracking for your dating app
export const trackDatingEvents = {
  signupInitiated: () => logEvent("signup_initiated", "user_engagement"),
  profileViewed: () => logEvent("profile_viewed", "user_engagement"), 
  eventJoined: (eventName?: string) => logEvent("event_joined", "conversion", eventName),
  matchMade: () => logEvent("match_made", "conversion"),
  chatStarted: () => logEvent("chat_started", "user_engagement"),
  meetupClicked: () => logEvent("meetup_clicked", "external_link", "meetup_button"),
  facebookClicked: () => logEvent("facebook_clicked", "external_link", "facebook_button"),
  ctaClicked: (location: string) => logEvent("cta_clicked", "engagement", location),
};
