export function AboutSection() {
  return (
    <section
      id="about"
      className="py-12 md:py-20 bg-gradient-to-br from-peacock-50 to-peacock-100/30 dark:from-peacock-900 dark:to-peacock-800/80"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left column - Text content in glass card */}
          <div className="glass-card">
            <h2 className="text-3xl md:text-4xl font-bold text-peacock-900 dark:text-peacock-100 mb-6 pb-3 relative">
              What is Peacock Dating?
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

            <div className="text-lg text-peacock-700 dark:text-peacock-100 leading-relaxed mb-8">
              <p className="mb-6">
                A modern courtship format:{" "}
                <strong className="text-peacock-500 dark:text-peacock-gold">
                  men
                </strong>{" "}
                speak on camera about who they are, what they value, their
                experiences, and what lights them up.{" "}
                <strong className="text-peacock-500 dark:text-peacock-gold">
                  Women
                </strong>{" "}
                can listen anonymously (camera optional) and choose privately
                who to connect with afterward. Matches are only shared on a{" "}
                <strong className="text-peacock-500 dark:text-peacock-gold">
                  mutual "yes."
                </strong>
              </p>
            </div>

            {/* Feature highlight with icon */}
            <div className="border border-peacock-500/30 dark:border-peacock-gold/40 p-6 rounded-lg bg-peacock-100/20 dark:bg-peacock-900/40">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-peacock-gold/20">
                  <svg
                    className="w-5 h-5 text-peacock-600 dark:text-peacock-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-peacock-600 dark:text-peacock-400 font-semibold mb-2">
                    Hosted interview format
                  </p>
                  <p className="text-peacock-700 dark:text-peacock-100">
                    A friendly host interviews each man to help him open up. The
                    host may ask follow-ups (and a little light banter); men can
                    decline any question.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Better image */}
          <div className="glass-card p-0 overflow-hidden h-80 md:h-96 bg-peacock-50 dark:bg-peacock-900 flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src="/images/process_2.png"
                alt="Host guiding a respectful interview online"
                className="w-3/4 max-w-xs aspect-square object-contain mx-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
