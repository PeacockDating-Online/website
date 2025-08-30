import { Disclosure } from "@headlessui/react";

const FAQS: [string, string][] = [
  [
    "Is this like a dating app?",
    "No. It's a live, <strong>host-guided interview</strong> with clear rules and mutual-consent matching only.",
  ],
  [
    "Do women have to show their face?",
    "No. Women can attend with cameras off and remain anonymous if they prefer.",
  ],
  [
    "How can women ask questions?",
    "DM your question to the host during the event; they'll read it to the speaker. If you want to ask directly, you must switch on <strong>both your camera and mic</strong>.",
  ],
  [
    "Can men refuse a question?",
    "Yes. Men may decline any question. The host keeps things respectful and light, including gentle jokes.",
  ],
  [
    "How do matches work?",
    "After the event, women privately submit picks. We only introduce pairs that both say 'yes.'",
  ],
  [
    "What should men prepare?",
    "A short intro, a story, and a hobby or project you care about. Authenticity &gt; performance.",
  ],
];

export function FAQSection() {
  return (
    <section
      id="faq"
      className="py-12 md:py-20 bg-gradient-to-br from-peacock-50 to-peacock-100/20 dark:from-peacock-900/90 dark:to-peacock-800"
    >
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-peacock-900 dark:text-peacock-100 mb-4">
            FAQ
          </h2>
          <div className="w-16 h-1 mx-auto mb-8 bg-peacock-gold" />
        </div>

        <div className="max-w-4xl mx-auto relative overflow-hidden">
          {/* decorative theme glows */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-8 -right-6 h-40 w-40 rounded-full bg-peacock-500/10 dark:bg-peacock-500/25 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-10 -left-8 h-48 w-48 rounded-full bg-peacock-gold/10 dark:bg-peacock-gold/25 blur-3xl"
          />
          {/* subtle extra glow for depth on dark */}
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-16 right-10 h-36 w-36 rounded-full bg-peacock-purple/0 dark:bg-peacock-purple/20 blur-3xl"
          />

          <div className="glass-card divide-y divide-peacock-100/40 dark:divide-peacock-800/60 overflow-hidden relative">
            {FAQS.map(([q, a], idx) => (
              <Disclosure key={q} as="div" className="relative group">
                {({ open }) => (
                  <>
                    {/* left color accent */}
                    <span
                      aria-hidden
                      className={`absolute left-0 top-0 h-full w-1 transition-opacity ${
                        open
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-60"
                      } ${
                        idx % 4 === 0
                          ? "bg-peacock-500"
                          : idx % 4 === 1
                          ? "bg-peacock-green"
                          : idx % 4 === 2
                          ? "bg-peacock-gold"
                          : "bg-peacock-purple"
                      }`}
                    />

                    <Disclosure.Button className="w-full flex items-center justify-between text-left px-6 py-5 font-semibold text-peacock-900 dark:text-peacock-100 hover:bg-peacock-100/10 dark:hover:bg-peacock-800/20 transition-colors relative">
                      <span className="pr-4">{q}</span>
                      <div className="flex-shrink-0">
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                            open
                              ? "bg-peacock-500 text-white shadow"
                              : "bg-peacock-500/30 text-white"
                          }`}
                        >
                          <svg
                            className={`w-3.5 h-3.5 transition-transform ${
                              open ? "rotate-180" : "rotate-0"
                            }`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      {/* persistent subtle gold baseline */}
                      <span
                        aria-hidden
                        className="absolute left-6 right-6 bottom-0 h-px rounded-full bg-peacock-gold/50"
                      />
                      {/* animated stronger gold underline */}
                      <span
                        aria-hidden
                        className={`absolute left-6 right-6 bottom-0 h-[3px] rounded-full bg-peacock-gold transform origin-left transition-transform duration-300 ${
                          open
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </Disclosure.Button>

                    <Disclosure.Panel className="px-6 pb-6 text-ink dark:text-white">
                      <p dangerouslySetInnerHTML={{ __html: a }} />
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
