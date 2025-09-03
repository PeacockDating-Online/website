import { Card } from "../../components/ui/Card";

const steps = [
  {
    title: "RSVP on Meetup",
    desc: "RSVP on Meetup and join the event online.",
  },
  {
    title: "Host-guided interview",
    desc: "The host chats with each man in short, friendly rounds.",
  },
  {
    title: "Listen actively",
    desc: "Men share stories, hobbies, and what matters to them. Everyone gets a fair turn and can skip any question.",
  },
  {
    title: "Send questions to host",
    desc: "Women can listen with camera off, or DM the host questions. To speak, just turn on your video and audio.",
  },
  {
    title: "Connect on mutual consent",
    desc: "Afterward, women send their picks privately. Only mutual matches get an introduction!",
  },
];

export function HowSection() {
  const top = steps.slice(0, 3);
  const bottom = steps.slice(3);

  return (
    <section
      id="how"
      className="pt-6 pb-12 md:pt-8 md:pb-12 bg-gradient-to-br from-peacock-50/40 to-peacock-100 dark:from-peacock-800/60 dark:to-peacock-900/80"
    >
      <div className="container">
        <div className="text-center mb-6">
          <h2 className="section-header text-3xl md:text-4xl font-bold text-peacock-900 dark:text-peacock-100">
            How It Works
          </h2>
          <p className="mt-2 text-base md:text-lg text-peacock-600 dark:text-peacock-200 max-w-2xl mx-auto">
            A simple, host-led process designed to highlight character and keep
            women’s choices private.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* top row: 3-column responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {top.map((step, i) => (
              <Card
                key={i}
                className="glass-card p-6 flex flex-col items-center text-center h-full relative overflow-visible"
              >
                {/* number badge: top center */}
                <span
                  className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-11 h-11 rounded-full text-sm font-semibold shadow-sm"
                  style={{
                    backgroundColor: "var(--peacock-gold)",
                    color: "#00152B",
                  }}
                  aria-hidden
                >
                  {i + 1}
                </span>

                {/* step illustration (larger + cropped bottom if needed) */}
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-white border border-peacock-100 shadow-sm">
                  <img
                    src={`/images/process_${i + 1}.png`}
                    alt={`Illustration for ${step.title}`}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-peacock-900 dark:text-peacock-100">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-peacock-700 dark:text-peacock-200 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* bottom row: centered two-card row (keeps symmetry under the top row) */}
          {bottom.length > 0 && (
            <div className="mt-6 flex flex-wrap justify-center gap-6">
              {bottom.map((step, idx) => (
                <div
                  key={idx}
                  className="w-full sm:w-1/2 lg:w-[320px] flex-shrink-0"
                >
                  <Card className="glass-card p-6 flex flex-col items-center text-center h-full relative overflow-visible">
                    {/* badge (number continues from top) */}
                    <span
                      className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-11 h-11 rounded-full text-sm font-semibold shadow-sm"
                      style={{
                        backgroundColor: "var(--peacock-gold)",
                        color: "#00152B",
                      }}
                      aria-hidden
                    >
                      {3 + idx + 1}
                    </span>

                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-white border border-peacock-100 shadow-sm">
                      <img
                        src={`/images/process_${3 + idx + 1}.png`}
                        alt={`Illustration for ${step.title}`}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-peacock-900 dark:text-peacock-100">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm text-peacock-700 dark:text-peacock-200 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
