import { Menu, X } from "lucide-react";
import { LINKS } from "../../utils/links";
import { useDarkMode } from "../../hooks/useDarkMode";
import { Button } from "../ui/Button";
import { useState } from "react";

export function Header() {
  const { dark, toggle } = useDarkMode();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-peacock-100/90 dark:bg-peacock-900/95 backdrop-blur-md border-b border-peacock-200/60 dark:border-peacock-800/80">
      <div className="container py-3 flex items-center justify-between text-ink dark:text-peacock-100">
        <a
          href="#top"
          className="flex items-center gap-2 font-extrabold tracking-tight text-lg md:text-xl font-heading hover:opacity-80 transition-opacity"
        >
          <img
            src="/images/peacock-logo-small.png"
            alt="Peacock Dating logo"
            className="h-8 w-8"
          />
          <span>
            <span className="text-peacock-900 dark:text-peacock-gold">
              Peacock
            </span>{" "}
            <span className="text-peacock-500 dark:text-peacock-gold">
              Dating
            </span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {[
            ["#about", "About"],
            ["#how", "How it works"],
            ["#roles", "Roles"],
            ["#rules", "Rules"],
            ["#faq", "FAQ"],
          ].map(([href, label]) => (
            <a
              key={href}
              className="text-peacock-700 dark:text-peacock-100 hover:text-peacock-500 dark:hover:text-peacock-gold transition-colors"
              href={href}
            >
              {label}
            </a>
          ))}
          <a
            href={LINKS.meetup}
            target="_blank"
            rel="noreferrer"
            className="inline-block"
          >
            <Button size="sm" variant="primary">
              Join Meetup
            </Button>
          </a>
          <Button variant="ghost" size="sm" onClick={toggle}>
            {dark ? "☀️" : "🌙"}
          </Button>
        </nav>
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 dark:border-peacock-700 hover:bg-black/5 dark:hover:bg-peacock-800/50 transition-colors text-ink dark:text-peacock-100"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {/* Mobile Nav */}
      <nav
        id="mobile-nav"
        className={
          open
            ? "md:hidden border-t border-peacock-200 dark:border-peacock-800 bg-white/95 dark:bg-peacock-900/95 backdrop-blur-md"
            : "hidden"
        }
      >
        <div className="container py-4 grid gap-1 text-base bg-white/95 dark:bg-peacock-900/95">
          {[
            ["#about", "About"],
            ["#how", "How it works"],
            ["#roles", "Roles"],
            ["#rules", "Rules"],
            ["#faq", "FAQ"],
          ].map(([href, label]) => (
            <a
              key={href}
              className="py-2 text-peacock-700 dark:text-peacock-100 hover:text-peacock-500 dark:hover:text-peacock-gold transition-colors"
              href={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <div className="pt-3 border-t border-gray-200 dark:border-peacock-700 mt-2">
            <a
              className="block py-2 mb-3"
              href={LINKS.meetup}
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="primary" className="w-full">
                Join on Meetup
              </Button>
            </a>
            <Button
              variant="ghost"
              className="w-full"
              onClick={() => {
                toggle();
                setOpen(false);
              }}
            >
              {dark ? "☀️ Light" : "🌙 Dark"} mode
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
