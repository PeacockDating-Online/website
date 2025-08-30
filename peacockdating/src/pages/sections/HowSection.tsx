import { useState, useEffect } from "react";
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

function PeacockLogo() {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        marginBottom: "150px",
        boxShadow: hovered
          ? "0 0 0 12px #55e6c133, 0 0 32px 8px #FFC10744, 0 8px 32px #6A0DAD33"
          : "0 2px 16px #0002",
        transition: "box-shadow 0.4s cubic-bezier(0.22,1,0.36,1)",
      }}
      className="w-24 h-24 rounded-full flex items-center justify-center bg-white border-2 border-peacock-500"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src="/images/peacock-logo-small.png"
        alt="Peacock Dating Logo"
        className="w-20 h-20 object-contain"
        style={{ aspectRatio: "1/1" }}
        loading="lazy"
      />
    </div>
  );
}

function FanFeather({
  idx,
  step,
  spread,
}: {
  idx: number;
  step: (typeof steps)[number];
  spread: boolean;
}) {
  // Fan positions for 5 feathers, closed and spread
  const closed = [
    "rotate(-60deg) translateY(-220px) rotate(60deg)",
    "rotate(-30deg) translateY(-250px) rotate(30deg)",
    "translateY(-280px)",
    "rotate(30deg) translateY(-250px) rotate(-30deg)",
    "rotate(60deg) translateY(-220px) rotate(-60deg)",
  ];
  const open = [
    "rotate(-80deg) translateY(-350px) rotate(80deg)",
    "rotate(-40deg) translateY(-380px) rotate(40deg)",
    "translateY(-300px)",
    "rotate(40deg) translateY(-380px) rotate(-40deg)",
    "rotate(80deg) translateY(-350px) rotate(-80deg)",
  ];
  const [hovered, setHovered] = useState(false);
  // Hover transforms for each feather
  const hoverTransforms = [
    "rotate(-60deg) translateY(-240px) rotate(60deg) scale(1.05)",
    "rotate(-30deg) translateY(-270px) rotate(30deg) scale(1.05)",
    "translateY(-300px) scale(1.05)",
    "rotate(30deg) translateY(-270px) rotate(-30deg) scale(1.05)",
    "rotate(60deg) translateY(-240px) rotate(-60deg) scale(1.05)",
  ];
  // Z-index logic: by default, feather 1 is above 2, 2 above 3, etc. (idx 0 highest)
  // On hover, hovered feather is on top, then feather 1, then 2, etc.
  let zIndex = 100 - idx;
  if (hovered) {
    zIndex = 200;
  }
  const style = {
    transform: spread
      ? open[idx]
      : hovered
      ? hoverTransforms[idx]
      : closed[idx],
    zIndex,
    transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
    position: "absolute" as const,
    bottom: 90,
    left: "50%",
    width: 220,
    marginLeft: -110,
    cursor: "pointer",
  };
  return (
    <div
      className={`feather feather-${idx + 1}`}
      style={style}
      tabIndex={0}
      aria-label={`Step ${idx + 1}: ${step.title}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <Card
        className="flex flex-col items-center text-center h-full p-6"
        style={{
          boxShadow: hovered
            ? "0 0 0 12px #FFC10733, 0 0 32px 8px #55e6c133, 0 8px 32px #6A0DAD22"
            : "0 2px 16px #0002",
          transition: "box-shadow 0.4s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <div className="w-28 h-28 rounded-full flex items-center justify-center mb-4 shadow-lg border-2 border-white dark:border-peacock-900 bg-white">
          <img
            src={`/images/process_${idx + 1}.png`}
            alt={`Step ${idx + 1} illustration`}
            className="w-24 h-24 object-contain"
            style={{ aspectRatio: "1/1" }}
            loading="lazy"
          />
        </div>
        <h3 className="text-lg font-bold mb-2 text-peacock-700 dark:text-peacock-gold">
          {step.title}
        </h3>
        <p className="text-peacock-600 dark:text-peacock-100 text-sm">
          {step.desc}
        </p>
      </Card>
    </div>
  );
}

function FanFeathers({ spread }: { spread: boolean }) {
  return (
    <div className="feather-wrapper lg:contents">
      {steps.map((step, i) => (
        <FanFeather key={i} idx={i} step={step} spread={spread} />
      ))}
    </div>
  );
}

export function HowSection() {
  const [spread, setSpread] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function onResize() {
      setIsMobile(window.innerWidth < 1024);
    }
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section
      id="how"
      className="pt-8 pb-24 md:pt-12 md:pb-32 bg-gradient-to-br from-peacock-50/40 to-peacock-100 dark:from-peacock-800/60 dark:to-peacock-900/80"
    >
      <div className="container mx-auto px-4 py-2">
        <div className="text-center mb-2 md:mb-0">
          <h2
            className="text-3xl md:text-4xl font-bold text-peacock-900 dark:text-peacock-100 mb-2 pb-1 relative"
            style={{ fontFamily: "'Playfair Display', serif", marginTop: 0 }}
          >
            How It Works
          </h2>
          <p className="mt-1 text-lg text-peacock-600 dark:text-peacock-200">
            Our unique process for meaningful connections.
          </p>
        </div>

        {/* Fan layout for desktop, vertical for mobile */}
        <div
          id="peacock-container"
          className={`peacock-container relative w-full flex items-end justify-center ${
            spread ? "is-spread" : ""
          }`}
          style={{
            height: isMobile ? "auto" : 600,
            paddingBottom: isMobile ? 120 : undefined,
            marginTop: 120,
          }}
        >
          {!isMobile && (
            <div
              className="peacock-logo flex flex-col items-center text-center select-none"
              onMouseEnter={() => setSpread(true)}
              onMouseLeave={() => setSpread(false)}
              tabIndex={-1}
              aria-hidden
            >
              <PeacockLogo />
            </div>
          )}
          {isMobile ? (
            <div className="feather-wrapper flex flex-col items-center w-full mt-8">
              {steps.map((step, i) => (
                <div key={i} className="w-full max-w-md mx-auto mb-6">
                  <Card className="transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-2xl active:scale-100 flex flex-col items-center text-center h-full p-6">
                    <div className="w-28 h-28 rounded-full flex items-center justify-center mb-4 shadow-lg border-2 border-white dark:border-peacock-900 bg-white">
                      <img
                        src={`/images/process_${i + 1}.png`}
                        alt={`Step ${i + 1} illustration`}
                        className="w-24 h-24 object-contain"
                        style={{ aspectRatio: "1/1" }}
                        loading="lazy"
                      />
                    </div>
                    <h4
                      className="text-lg font-bold mb-2 text-peacock-700 dark:text-peacock-gold"
                      style={{
                        fontFamily: "'Poppins', ui-sans-serif, sans-serif",
                      }}
                    >
                      {step.title}
                    </h4>
                    <p
                      className="text-peacock-600 dark:text-peacock-100 text-sm"
                      style={{ lineHeight: 1.5 }}
                    >
                      {step.desc}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          ) : (
            <FanFeathers spread={spread} />
          )}
        </div>
      </div>
    </section>
  );
}
