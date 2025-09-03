import { Button } from "../../components/ui/Button";
import { LINKS } from "../../utils/links";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/man-wearing-tie.jpg"
          alt="Peacock feather background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-peacock-800/90 via-peacock-purple/70 to-peacock-700/90" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full animate-pulse opacity-60"
          style={{ backgroundColor: "#FFD700" }}
        ></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white rounded-full animate-ping opacity-40"></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 rounded-full animate-pulse opacity-50"
          style={{ backgroundColor: "#FFD700", animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 w-full">
        <div className="container py-20 md:py-32">
          <div className="max-w-[76.8rem] mx-auto text-center">
            {/* Hero-specific glass card wrapper */}
            <div className="hero-glass-card">
              <div className="inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-widest backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg bg-peacock-gold/90">
                <img
                  src="/images/peacock-logo-small.png"
                  alt="Peacock"
                  className="h-4 w-4"
                />
                <span className="text-peacock-900 font-semibold">
                  Modern courtship • Respectful connection
                </span>
              </div>

              <h1 className="text-[3.6rem] md:text-[5.4rem] font-bold mb-6 leading-tight">
                <span className="text-strong">Men show their colors.</span>
                <br />
                <span className="text-accent">Women choose in private.</span>
              </h1>

              <p className="text-[1.5rem] md:text-[1.8rem] mb-8 max-w-3xl mx-auto leading-relaxed text-muted dark:text-muted">
                A respectful, host-guided interview where men speak on camera
                and women may stay in the shade. Questions via chat, mutual
                consent only.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={LINKS.meetup}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block"
                >
                  <Button
                    variant="gold"
                    size="lg"
                    className="w-full sm:w-auto min-w-[160px]"
                  >
                    Join on Meetup
                  </Button>
                </a>
                <a
                  href={LINKS.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block"
                >
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full sm:w-auto min-w-[160px]"
                  >
                    Facebook Group
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
