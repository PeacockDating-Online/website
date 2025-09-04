import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { initGA } from "./analytics.ts";

// Initialize Google Analytics
if (typeof window !== "undefined") {
  initGA();
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
