import { useEffect, useState } from "react";

interface Reaction {
  id: number;
  x: number;
  y: number;
  type: "heart" | "star" | "sparkle";
}

export function ReactionsLayer() {
  const [reactions, setReactions] = useState<Reaction[]>([]);

  const triggerCelebration = () => {
    const newReactions: Reaction[] = [];
    for (let i = 0; i < 12; i++) {
      newReactions.push({
        id: Date.now() + i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        type: ["heart", "star", "sparkle"][
          Math.floor(Math.random() * 3)
        ] as Reaction["type"],
      });
    }
    setReactions(newReactions);

    // Clear reactions after animation
    setTimeout(() => setReactions([]), 2000);
  };

  useEffect(() => {
    // Expose to global scope for external triggering
    (window as any).triggerCelebration = triggerCelebration;

    return () => {
      delete (window as any).triggerCelebration;
    };
  }, []);

  const getEmoji = (type: Reaction["type"]) => {
    switch (type) {
      case "heart":
        return "💖";
      case "star":
        return "⭐";
      case "sparkle":
        return "✨";
      default:
        return "💖";
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {reactions.map((reaction) => (
        <div
          key={reaction.id}
          className="absolute text-2xl"
          style={{
            left: `${reaction.x}%`,
            top: `${reaction.y}%`,
            animation: "float-up 2s ease-out forwards",
          }}
        >
          {getEmoji(reaction.type)}
        </div>
      ))}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes float-up {
            0% {
              opacity: 1;
              transform: translateY(0) scale(0.8);
            }
            50% {
              opacity: 0.8;
              transform: translateY(-100px) scale(1);
            }
            100% {
              opacity: 0;
              transform: translateY(-200px) scale(0.6);
            }
          }
          
          @media (prefers-reduced-motion: reduce) {
            .animate-bounce {
              animation: none;
            }
          }
        `,
        }}
      />
    </div>
  );
}
