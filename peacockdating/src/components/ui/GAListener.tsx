import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { logPageView } from "../../analytics";

// GA Listener Component to track page views
export function GAListener({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    logPageView(location.pathname + location.search, document.title);
  }, [location]);

  return <>{children}</>;
}
