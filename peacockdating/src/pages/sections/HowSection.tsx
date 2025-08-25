import { Card } from "../../components/ui/Card";

const steps = [
  "RSVP on Meetup and join the event online.",
  "The host chats with each man in short, friendly rounds.",
  "Men share stories, hobbies, and what matters to them. Everyone gets a fair turn and can skip any question.",
  "Women can listen with camera off, or DM the host questions. To speak, just turn on your video and audio.",
  "Afterward, women send their picks privately. Only mutual matches get an introduction!",
];

export function HowSection() {
  return (
    <section
      id="how"
      className="py-12 md:py-20 bg-gradient-to-br from-peacock-50/40 to-peacock-100 dark:from-peacock-800/60 dark:to-peacock-900/80"
    >
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-peacock-900 dark:text-peacock-100 mb-8 pb-3 relative">
            How it works
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

        <div className="flex flex-col items-center max-w-6xl mx-auto mb-12">
          {/* Steps as a horizontal flow */}
          <div className="glass-card w-full flex flex-col justify-center items-center mb-8">
            <h3 className="text-xl font-semibold mb-6 text-peacock-500 dark:text-peacock-gold text-center">
              The Process
            </h3>
            <ol className="flex flex-col md:flex-row md:items-stretch md:justify-between gap-4 md:gap-2 w-full max-w-4xl mx-auto">
              {steps.map((text, i) => (
                <li
                  key={i}
                  className="flex-1 flex flex-col items-center md:items-start md:max-w-[180px]"
                >
                  <div className="w-32 h-32 md:w-36 md:h-36 rounded-xl overflow-hidden shadow-lg bg-white/80 dark:bg-peacock-900/70 flex items-center justify-center mb-3 md:mb-5">
                    <img
                      src={`/images/process_${i + 1}.png`}
                      alt={`Step ${i + 1}`}
                      className="w-full h-full object-contain"
                      style={{ aspectRatio: "1/1" }}
                      loading="lazy"
                    />
                  </div>
                  <p className="text-peacock-700 dark:text-peacock-100 text-center md:text-left text-sm md:text-base leading-snug">
                    {text}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* Feature highlights with images, below the process */}
          <div className="flex flex-col md:flex-row gap-6 w-full justify-center items-stretch">
            <Card className="glass-card border-l-4 border-peacock-gold flex-1 flex flex-col items-center text-center">
              <div className="flex flex-col items-center gap-3 mb-4">
                <img
                  src="/images/icon-chat.png"
                  alt="Conversation prompts"
                  className="w-10 h-10"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold text-peacock-gold">
                  Tonight's prompt ideas
                </h3>
              </div>
              <ul className="space-y-3 text-peacock-700 dark:text-peacock-100 text-sm">
                <li>Show & Tell: a hobby you love (share a photo).</li>
                <li>A relationship insight you've learned.</li>
                <li>A small ritual that makes your week better.</li>
                <li>A project you're proud of or a goal this year.</li>
              </ul>
            </Card>
            <Card className="glass-card border-l-4 border-peacock-green flex-1 flex flex-col items-center text-center">
              <div className="flex flex-col items-center gap-3 mb-4">
                <img
                  src="/images/icon-privacy.png"
                  alt="Privacy and consent first"
                  className="w-10 h-10"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold text-peacock-green">
                  Why it works
                </h3>
              </div>
              <p className="text-ink dark:text-white leading-relaxed text-sm">
                Stories beat swipes. The format lowers pressure, spotlights
                character, and respects privacy and consent.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
