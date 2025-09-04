import { trackEvent, trackDatingEvent } from "../../utils/analytics";

export const AnalyticsTest = () => {
  const testEvent = () => {
    console.log("Testing custom event...");
    trackEvent("test_button_click", "engagement", "analytics_test");
  };

  const testDatingEvent = () => {
    console.log("Testing dating-specific event...");
    trackDatingEvent.signupInitiated();
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "#004D7A",
        color: "white",
        padding: "10px",
        borderRadius: "8px",
        fontSize: "12px",
        zIndex: 9999,
      }}
    >
      <h4>Analytics Test Panel</h4>
      <button
        onClick={testEvent}
        style={{
          background: "white",
          color: "#004D7A",
          border: "none",
          padding: "5px 10px",
          margin: "2px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Test Event
      </button>
      <button
        onClick={testDatingEvent}
        style={{
          background: "white",
          color: "#004D7A",
          border: "none",
          padding: "5px 10px",
          margin: "2px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Test Dating Event
      </button>
      <div style={{ fontSize: "10px", marginTop: "5px" }}>
        Open browser console to see logs
      </div>
    </div>
  );
};

// Usage: Add this to your App.tsx for testing
// Remove in production
