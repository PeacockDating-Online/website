import { Button } from "../../components/ui/Button";
import { LINKS } from "../../utils/links";
import { Heart, MessageCircle, ShieldCheck } from "lucide-react";
import IconCalendar from "/images/icon-calendar.png";

export function CTASection() {
  return (
    <section className="py-10 md:py-16 bg-gradient-to-br from-peacock-100/60 via-peacock-50/40 to-peacock-gold/20 dark:from-peacock-900/90 dark:via-peacock-800/80 dark:to-peacock-900/90">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card border-l-4 border-peacock-500 flex flex-col md:flex-row items-center md:items-stretch gap-0 md:gap-6 p-0 overflow-hidden">
            {/* Image + Features (Left) */}
            <div className="flex-1 min-w-[220px] bg-peacock-50 dark:bg-peacock-900 flex flex-col">
              <div className="h-56 md:h-72 flex items-center justify-center">
                <img
                  src="/images/man-wearing-tie.jpg"
                  alt="Professional conversation setting - representing respectful dating"
                  className="w-full h-full object-cover object-center rounded-none md:rounded-l-xl"
                  loading="lazy"
                />
              </div>
              <ul className="grid grid-cols-1 gap-3 p-4 md:p-5 border-t border-peacock-100/60 dark:border-peacock-800/60">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-peacock-500/20 flex items-center justify-center">
                    <Heart className="w-4 h-4 text-peacock-500" />
                  </div>
                  <span className="text-peacock-800 dark:text-peacock-100 text-sm md:text-base">
                    Mutual yes only
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-peacock-gold/20 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-peacock-gold" />
                  </div>
                  <span className="text-peacock-800 dark:text-peacock-100 text-sm md:text-base">
                    Women can ask via chat
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-peacock-green/20 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-peacock-green" />
                  </div>
                  <span className="text-peacock-800 dark:text-peacock-100 text-sm md:text-base">
                    Respectful, host-guided
                  </span>
                </li>
              </ul>
            </div>
            {/* Content Side */}
            <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/images/peacock-logo-small.png"
                  alt="Peacock"
                  className="h-8 w-8"
                />
                <span className="text-lg font-semibold text-peacock-500 dark:text-peacock-gold">
                  Peacock Dating
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-peacock-900 dark:text-peacock-100 mb-5 pb-3 relative">
                Join a kinder way to meet
                {/* persistent subtle gold baseline */}
                <span
                  aria-hidden
                  className="absolute left-0 right-0 bottom-0 h-px rounded-full bg-peacock-gold/50"
                />
                {/* always-visible thick gold underline */}
                <span
                  aria-hidden
                  className="absolute left-0 right-0 bottom-0 h-[3px] rounded-full bg-peacock-gold"
                />
              </h2>
              <p className="text-base md:text-lg text-peacock-700 dark:text-peacock-100 mb-5 leading-relaxed">
                Be yourself, listen comfortably, and only connect when it feels
                right. We host respectful, small-group interviews that highlight
                character over swipes.
              </p>
              {/* Features moved to the left side under the image */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={LINKS.meetup}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block"
                >
                  <Button variant="primary" size="md" className="min-w-[160px]">
                    RSVP on Meetup
                  </Button>
                </a>
                <a
                  href={LINKS.events}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block"
                >
                  <Button
                    variant="secondary"
                    size="md"
                    className="min-w-[160px]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <img
                        src={IconCalendar}
                        alt="Event calendar and RSVP"
                        className="w-4 h-4"
                      />
                      View Events
                    </span>
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
