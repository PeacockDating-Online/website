import { Button } from "../../components/ui/Button";
import { Heart, Users, MapPin } from "lucide-react";
import { LINKS } from "../../utils/links";
import { trackDatingEvents } from "../../analytics";

export function CTASection() {
  // Stats pulled from Meetup events - update these with real numbers
  const STATS = {
    eventsHosted: 24,
    totalAttendees: 430,
    matchesMade: 112,
    upcomingEvents: 3,
  };

  return (
    <section className="py-10 md:py-16 bg-gradient-to-br from-peacock-100/40 via-peacock-50 to-peacock-50/80 dark:from-peacock-900/80 dark:to-peacock-900/95 transition-colors">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card overflow-hidden md:flex md:items-stretch md:gap-0">
            {/* Content (left) */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="/images/peacock-logo-small.png"
                  alt="Peacock Dating"
                  className="h-8 w-8"
                />
                <span className="text-lg font-semibold text-peacock-500 dark:text-peacock-200">
                  Peacock Dating
                </span>
              </div>
              <h2 className="section-header text-2xl md:text-3xl font-bold text-peacock-900 dark:text-peacock-100 mb-3">
                Join our respectful, host-guided events
              </h2>
              <p className="text-peacock-700 dark:text-peacock-200 mb-5">
                Small, curated online events where men present briefly and women
                choose privately. Matches are only introduced on mutual consent.
              </p>

              {/* Compact stats row */}
              <div className="flex gap-3 mb-6 flex-wrap">
                <div className="flex-1 min-w-[120px] text-center p-3 bg-peacock-50/60 dark:bg-peacock-800/30 rounded-lg">
                  <div className="text-2xl md:text-3xl font-bold text-peacock-gold">
                    {STATS.eventsHosted}+
                  </div>
                  <div className="text-xs text-peacock-700 dark:text-peacock-200 mt-1">
                    Events hosted
                  </div>
                </div>
                <div className="flex-1 min-w-[120px] text-center p-3 bg-peacock-50/60 dark:bg-peacock-800/30 rounded-lg">
                  <div className="text-2xl md:text-3xl font-bold text-peacock-gold">
                    {STATS.totalAttendees}+
                  </div>
                  <div className="text-xs text-peacock-700 dark:text-peacock-200 mt-1">
                    Attendees
                  </div>
                </div>
                <div className="flex-1 min-w-[120px] text-center p-3 bg-peacock-50/60 dark:bg-peacock-800/30 rounded-lg">
                  <div className="text-2xl md:text-3xl font-bold text-peacock-gold">
                    {STATS.matchesMade}+
                  </div>
                  <div className="text-xs text-peacock-700 dark:text-peacock-200 mt-1">
                    Matches
                  </div>
                </div>
              </div>

              <ul className="grid gap-2 mb-6 text-sm">
                <li className="flex items-center gap-3">
                  <Heart className="w-4 h-4 text-peacock-500" />
                  <span className="text-peacock-800 dark:text-peacock-100">
                    Mutual consent only
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-peacock-500" />
                  <span className="text-peacock-800 dark:text-peacock-100">
                    Small, intimate groups
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-peacock-500" />
                  <span className="text-peacock-800 dark:text-peacock-100">
                    Online events worldwide
                  </span>
                </li>
              </ul>

              <div className="flex gap-3">
                <a
                  href={LINKS.meetup}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1"
                  onClick={() => trackDatingEvents.meetupClicked()}
                >
                  <Button variant="primary" size="md" className="w-full">
                    Join on Meetup
                  </Button>
                </a>
                <a
                  href="https://whenly.online/p/4TEVhdzQ81ur3U51Kdz7"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1"
                  onClick={() => trackDatingEvents.ctaClicked("vote_for_times")}
                >
                  <Button variant="secondary" size="md" className="w-full">
                    Vote for times
                  </Button>
                </a>
              </div>
            </div>

            {/* Image (right) with subtle overlay for legibility */}
            <div className="hidden md:block md:w-1/2 relative">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1400&q=80&auto=format&fit=crop"
                alt="Small group in a friendly online gathering"
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-peacock-900/20 dark:from-transparent dark:to-peacock-900/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
