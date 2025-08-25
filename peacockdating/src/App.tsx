import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import "./theme.css";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-dvh bg-peacock-50 dark:bg-peacock-900 text-ink dark:text-peacock-100 font-body transition-colors duration-300">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
