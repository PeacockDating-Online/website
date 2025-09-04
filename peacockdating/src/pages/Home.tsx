import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { HowSection } from "./sections/HowSection";
import { RolesSection } from "./sections/RolesSection";
import { RulesSection } from "./sections/RulesSection";

import { FAQSection } from "./sections/FAQSection";
import { ShowcaseSection } from "./sections/ShowcaseSection";
import { CTASection } from "./sections/CTASection";
import { SEO } from "../components/ui/SEOHelmet";

export default function Home() {
  return (
    <div>
      <SEO
        title="Home"
        description="Peacock Dating: A modern courtship meetup where men share on camera and women listen anonymously. Join our unique dating events with host-led interviews and private matching."
        keywords="peacock dating, modern dating, courtship meetup, video dating, singles events, matchmaking, dating app alternative"
        url="https://peacockdating.online/"
      />
      <HeroSection />
      <AboutSection />
      <HowSection />
      <RolesSection />
      <RulesSection />
      <ShowcaseSection />
      <CTASection />
      <FAQSection />
    </div>
  );
}
