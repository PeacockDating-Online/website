export function ShowcaseSection() {
  return (
    <section
      id="showcase"
      className="py-12 md:py-20 bg-gradient-to-br from-peacock-50 to-peacock-100/20 dark:from-peacock-800/80 dark:to-peacock-900"
    >
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-peacock-900 dark:text-peacock-100 mb-6 pb-3 relative">
            In the vibe
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
          <p className="text-lg text-peacock-700 dark:text-peacock-100 max-w-2xl mx-auto">
            Warm, respectful, and a little playful. Here's the feel we aim for.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="group glass-card p-0 border-0 rounded-xl overflow-hidden relative aspect-[3/2] bg-peacock-50 dark:bg-peacock-900">
            <img
              src="/images/man-wearing-tie.jpg"
              alt="Conversation over performance"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 scale-[1.02] group-hover:scale-[1.06]"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-white dark:bg-peacock-900 rounded-lg p-3 border border-peacock-200 dark:border-peacock-700 shadow-lg">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-peacock-500/20 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-peacock-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Mutual respect
                    </h3>
                    <p className="text-sm text-gray-800 dark:text-white/90">
                      Only connect when both parties are genuinely interested
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group glass-card p-0 border-0 rounded-xl overflow-hidden relative aspect-[3/2] bg-peacock-50 dark:bg-peacock-900">
            <img
              src="/images/peacock-feather-1213066_1280.jpg"
              alt="Comfortable listening"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 scale-[1.02] group-hover:scale-[1.06]"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-white dark:bg-peacock-900 rounded-lg p-3 border border-peacock-200 dark:border-peacock-700 shadow-lg">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-peacock-gold/20 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-peacock-gold"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Authentic conversation
                    </h3>
                    <p className="text-sm text-gray-800 dark:text-white/90">
                      Real stories and genuine connections over superficial
                      interactions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group glass-card p-0 border-0 rounded-xl overflow-hidden relative aspect-[3/2] bg-peacock-50 dark:bg-peacock-900">
            <img
              src="/images/man-wearing-tie.jpg"
              alt="Host-guided, fair turns"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 scale-[1.02] group-hover:scale-[1.06]"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-white dark:bg-peacock-900 rounded-lg p-3 border border-peacock-200 dark:border-peacock-700 shadow-lg">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-peacock-green/20 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-peacock-green"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Safe environment
                    </h3>
                    <p className="text-sm text-gray-800 dark:text-white/90">
                      Host-moderated space with clear guidelines and mutual
                      respect
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
