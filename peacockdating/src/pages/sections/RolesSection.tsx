import { Card } from "../../components/ui/Card";

export function RolesSection() {
  return (
    <section id="roles" className="py-12 md:py-20 bg-surface">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-8 pb-3 relative">
            Roles & Expectations
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
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <Card className="glass-card border-l-4 border-peacock-500 px-6 py-6 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6">
              <svg
                className="w-6 h-6 text-peacock-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <h3 className="text-xl font-semibold text-peacock-500">
                For Men
              </h3>
            </div>
            <ul className="space-y-4 text-ink text-left">
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 bg-peacock-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>
                  Camera <strong>on</strong> for the full event.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 bg-peacock-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>
                  Be brave. Share who you are—values, hobbies, lessons learned.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 bg-peacock-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>
                  Hosted interview format: you can decline any question.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 bg-peacock-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>
                  Expect light jokes/banter from the host—stay good-humoured.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 bg-peacock-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>
                  <strong>Your speaking time is rationed</strong> so everyone
                  has a chance to share. Keep it concise and engaging.
                </span>
              </li>
            </ul>
          </Card>

          <Card className="glass-card border-l-4 border-peacock-purple px-6 py-6 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6">
              <svg
                className="w-6 h-6 text-peacock-purple"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <h3 className="text-xl font-semibold text-peacock-purple">
                For Women
              </h3>
            </div>
            <ul className="space-y-4 text-ink text-left">
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 bg-peacock-purple rounded-full mt-2 flex-shrink-0"></span>
                <span>
                  Camera optional; you may remain anonymous (stay{" "}
                  <strong>in the shade</strong>).
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 bg-peacock-purple rounded-full mt-2 flex-shrink-0"></span>
                <span>
                  DM questions to the host; they'll ask on your behalf.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 bg-peacock-purple rounded-full mt-2 flex-shrink-0"></span>
                <span>
                  If you want to ask a question yourself, you must turn on{" "}
                  <strong>both video and audio</strong>.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 bg-peacock-purple rounded-full mt-2 flex-shrink-0"></span>
                <span>Listen comfortably; note anyone you'd like to meet.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 bg-peacock-purple rounded-full mt-2 flex-shrink-0"></span>
                <span>
                  After the event, submit picks privately. Mutual "yes" = intro.
                </span>
              </li>
            </ul>
          </Card>

          <Card className="glass-card border-l-4 border-peacock-gold px-6 py-6 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6">
              <svg
                className="w-6 h-6 text-peacock-gold"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <h3 className="text-xl font-semibold text-peacock-gold">
                For the Host
              </h3>
            </div>
            <ul className="space-y-4 text-ink text-left">
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 bg-peacock-gold rounded-full mt-2 flex-shrink-0"></span>
                <span>
                  Keep speakers comfortable; ask follow-ups to surface
                  personality.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 bg-peacock-gold rounded-full mt-2 flex-shrink-0"></span>
                <span>
                  Read selected questions from women (anonymous by default).
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 bg-peacock-gold rounded-full mt-2 flex-shrink-0"></span>
                <span>Maintain pace, fairness, and a respectful tone.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 bg-peacock-gold rounded-full mt-2 flex-shrink-0"></span>
                <span>Step in or remove participants who break rules.</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
