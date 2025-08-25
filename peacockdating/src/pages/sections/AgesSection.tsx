import { Card } from "../../components/ui/Card";

export function AgesSection() {
  return (
    <section id="ages" className="py-12 md:py-20 bg-surface">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6 pb-3 relative">
            Ages & Attendance
            {/* persistent subtle gold baseline */}
            <span className="absolute left-0 right-0 bottom-0 h-px rounded-full bg-peacock-gold/50" />
            {/* always-visible thick gold underline */}
            <span className="absolute left-0 right-0 bottom-0 h-[3px] rounded-full bg-peacock-gold" />
          </h2>
          <p className="text-lg text-ink max-w-2xl mx-auto">
            Open to adults <strong className="text-peacock-500">18+</strong>. We
            welcome a wide range of life stages.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="glass-card border-l-4 border-peacock-green">
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
                Recent speaker ages (men)
              </h3>
            </div>
            <ul className="space-y-3 text-ink">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-peacock-green rounded-full flex-shrink-0"></span>
                26 years old — 1
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-peacock-green rounded-full flex-shrink-0"></span>
                42 years old — 1
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-peacock-green rounded-full flex-shrink-0"></span>
                43 years old — 1
              </li>
            </ul>
            <div className="mt-4 p-3 bg-peacock-green/10 rounded-lg">
              <p className="text-sm text-peacock-green">
                These are examples from recent events; actual ages vary by
                night.
              </p>
            </div>
          </Card>

          <Card className="glass-card border-l-4 border-peacock-purple">
            <div className="flex items-center gap-3 mb-4">
              <svg
                className="w-6 h-6 text-peacock-purple"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <h3 className="text-xl font-semibold text-peacock-purple">
                Participation
              </h3>
            </div>
            <p className="text-ink leading-relaxed">
              Women may attend with cameras off. If you want to ask something
              live, you must{" "}
              <strong className="text-peacock-purple">
                enable both video and audio
              </strong>{" "}
              — otherwise, simply DM your question to the host anytime.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
