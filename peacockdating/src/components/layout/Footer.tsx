import { LINKS } from "../../utils/links";
import { Button } from "../ui/Button";

export function Footer() {
  return (
    <footer className="w-full py-6 px-4 bg-peacock-50/80 dark:bg-peacock-900/90 border-t border-peacock-100 dark:border-peacock-800">
      <div className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-1 items-start">
        {/* Top-left: Brand (compact) */}
        <div className="flex flex-row items-center gap-3 min-w-[220px]">
          <img
            src="/images/peacock-logo-small.png"
            alt="Peacock Dating logo"
            className="h-9 w-9"
          />
          <div className="flex flex-col gap-1.5">
            <span className="font-semibold text-peacock-900 dark:text-peacock-100 text-base">
              Peacock Dating
            </span>
            <p className="text-gray-600 dark:text-gray-300 text-xs max-w-xs">
              Men share on camera. Women choose in private. Matches only on a
              mutual “yes.”
            </p>
          </div>
        </div>

        {/* Top-right: Nav */}
        <nav className="flex flex-row flex-wrap gap-x-4 gap-y-2 text-peacock-700 dark:text-peacock-100 text-sm font-medium justify-start md:justify-end">
          <a
            href="#about"
            className="hover:text-peacock-500 dark:hover:text-peacock-gold transition-colors"
          >
            About
          </a>
          <a
            href="#how"
            className="hover:text-peacock-500 dark:hover:text-peacock-gold transition-colors"
          >
            How it works
          </a>
          <a
            href="#roles"
            className="hover:text-peacock-500 dark:hover:text-peacock-gold transition-colors"
          >
            Roles
          </a>
          <a
            href="#rules"
            className="hover:text-peacock-500 dark:hover:text-peacock-gold transition-colors"
          >
            Rules
          </a>
          <a
            href="#faq"
            className="hover:text-peacock-500 dark:hover:text-peacock-gold transition-colors"
          >
            FAQ
          </a>
          <a
            href="#ages"
            className="hover:text-peacock-500 dark:hover:text-peacock-gold transition-colors"
          >
            Ages
          </a>
        </nav>

        {/* Bottom-right: CTA buttons (no card, minimal spacing) */}
        <div className="flex flex-row flex-nowrap items-center justify-start md:justify-end gap-1 -mt-3 md:-mt-4 md:col-start-2 md:row-start-2">
          <Button asChild variant="primary" size="sm">
            <a href={LINKS.events} target="_blank" rel="noopener noreferrer">
              Events{" "}
              <span aria-hidden className="ml-0.5">
                ↗
              </span>
            </a>
          </Button>
          <Button asChild variant="secondary" size="sm">
            <a href={LINKS.meetup} target="_blank" rel="noopener noreferrer">
              Meetup{" "}
              <span aria-hidden className="ml-0.5">
                ↗
              </span>
            </a>
          </Button>
          <Button asChild variant="inverse" size="sm">
            <a href={LINKS.facebook} target="_blank" rel="noopener noreferrer">
              Facebook{" "}
              <span aria-hidden className="ml-0.5">
                ↗
              </span>
            </a>
          </Button>
        </div>

        {/* Bottom-left: Copyright */}
        <div className="text-peacock-600 dark:text-peacock-200 text-sm md:col-start-1 md:row-start-2">
          &copy; {new Date().getFullYear()} Peacock Dating. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
