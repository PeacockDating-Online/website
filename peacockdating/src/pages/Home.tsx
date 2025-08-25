import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { HowSection } from "./sections/HowSection";
import { RolesSection } from "./sections/RolesSection";
import { RulesSection } from "./sections/RulesSection";
import { AgesSection } from "./sections/AgesSection";
import { FAQSection } from "./sections/FAQSection";
import { ShowcaseSection } from "./sections/ShowcaseSection";
import { CTASection } from "./sections/CTASection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <HowSection />
      <RolesSection />
      <RulesSection />
      <AgesSection />
      <FAQSection />
      <ShowcaseSection />
      <CTASection />
    </div>
  );
}
