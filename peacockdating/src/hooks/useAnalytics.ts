import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../utils/analytics';

// Hook to track page views automatically
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view when location changes
    const url = window.location.origin + location.pathname + location.search;
    trackPageView(url);
  }, [location]);
};

// Hook to track specific events
export const useEventTracking = () => {
  return {
    trackSignup: () => {
      // Track signup events
      trackPageView(window.location.href, 'Signup Initiated');
    },
    trackEventJoin: (eventName: string) => {
      // Track when user joins an event
      trackPageView(window.location.href, `Event Joined: ${eventName}`);
    },
    trackContactSubmit: () => {
      // Track contact form submissions
      trackPageView(window.location.href, 'Contact Form Submitted');
    },
  };
};
