import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import "./theme.css";
import "./App.css";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { GAListener } from "./components/ui/GAListener";

export default function App() {
  return (
    <div className="min-h-dvh bg-peacock-50 dark:bg-peacock-900 text-ink dark:text-peacock-100 font-body transition-colors duration-300">
      <BrowserRouter>
        <GAListener>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </GAListener>
      </BrowserRouter>
    </div>
  );
}
