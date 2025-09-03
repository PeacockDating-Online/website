import { Card } from "../../components/ui/Card";

export function RulesSection() {
  return (
    <section
      id="rules"
      className="py-12 md:py-20 bg-gradient-to-br from-peacock-50/30 to-peacock-100 dark:from-peacock-900 dark:to-peacock-800/70"
    >
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-peacock-900 dark:text-peacock-100 mb-8 pb-3 relative">
            Eligibility, Rules & Safety
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

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Rules Card */}
          <Card className="glass-card border-l-4 border-peacock-500 px-6 py-6 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <svg
                className="w-6 h-6 text-peacock-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <h3 className="text-xl font-semibold text-peacock-500">
                Community Guidelines
              </h3>
            </div>

            <ul className="space-y-4 text-peacock-700 dark:text-peacock-100 text-left">
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 bg-peacock-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>
                  <strong>Ages 18+ only.</strong>
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 bg-peacock-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>
                  Respectful conduct; no harassment, discrimination, or doxxing.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 bg-peacock-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>No screenshots or recordings.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 bg-peacock-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>
                  No contact details shared during the event; intros only on
                  mutual consent.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 bg-peacock-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>
                  The host may skip or rephrase questions; men may decline
                  questions.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 bg-peacock-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>
                  Spoken questions from women require{" "}
                  <strong>both video and audio enabled</strong>; otherwise
                  please DM the host to ask on your behalf.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 bg-peacock-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Hosts may remove anyone who breaks the rules.</span>
              </li>
            </ul>
          </Card>

          {/* Ages & Attendance Card */}
          <Card className="glass-card border-l-4 border-peacock-green px-6 py-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <svg
                  className="w-6 h-6 text-peacock-green"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-peacock-green">
                  Ages & Attendance
                </h3>
              </div>
              <p className="text-peacock-700 dark:text-peacock-100 mb-4">
                Open to adults <strong className="text-peacock-500">18+</strong>
                . We welcome a wide range of life stages.
              </p>
              <h4 className="font-semibold text-peacock-900 dark:text-peacock-100 mb-2">
                Recent Speaker Ages (Men)
              </h4>
              <ul className="space-y-2 text-peacock-700 dark:text-peacock-100 mb-4">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-peacock-green rounded-full flex-shrink-0"></span>
                  26 years old — 1 participant
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-peacock-green rounded-full flex-shrink-0"></span>
                  42 years old — 1 participant
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-peacock-green rounded-full flex-shrink-0"></span>
                  43 years old — 1 participant
                </li>
              </ul>
              <p className="text-sm text-peacock-600 dark:text-peacock-300 italic">
                These are examples from recent events; actual ages vary by
                night.
              </p>
            </div>
            <div className="mt-4 p-3 bg-peacock-green/10 rounded-lg">
              <h4 className="font-semibold text-peacock-900 dark:text-peacock-100 mb-2">
                Participation
              </h4>
              <p className="text-sm text-peacock-700 dark:text-peacock-100">
                Women may attend with cameras off. If you want to ask something
                live, you must{" "}
                <strong className="text-peacock-purple">
                  enable both video and audio
                </strong>{" "}
                — otherwise, simply DM your question to the host anytime.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
