import { useEffect, useRef } from "react";
import { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface StackingCardsProps {
  features: Feature[];
}

export function StackingCards({ features }: StackingCardsProps) {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) return;
      
      const cards = cardsRef.current?.querySelectorAll<HTMLDivElement>('.stacking-card');
      if (!cards) return;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const triggerPoint = window.innerHeight * 0.3;
        
        if (rect.top < triggerPoint) {
          card.classList.remove('stacking', 'stacked');
        } else if (rect.top < triggerPoint + 100) {
          card.classList.add('stacking');
          card.classList.remove('stacked');
        } else {
          card.classList.add('stacked');
          card.classList.remove('stacking');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

return (
    <section className="stacking-section">
      <div className="stacking-section-header bg-gradient-to-br from-primary to-purple-600 text-white text-center py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold mb-3">
          Everything You Need to Grow
        </h2>
        <p className="text-lg md:text-xl opacity-90">
          Stop juggling multiple tools. Ai Bunty brings it all together.
        </p>
      </div>

      <div 
        ref={cardsRef}
        className="stacking-cards-container max-w-7xl mx-auto px-5 py-10 md:py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:pt-20 md:pb-10"
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="stacking-card bg-card rounded-2xl p-8 shadow-soft border border-border transition-all duration-300 hover:shadow-hover hover:-translate-y-1"
              style={{
                ['--card-index' as string]: index,
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stacking-cards-container {
            display: block;
            padding-top: 100px;
            min-height: 200vh;
          }

          .stacking-card {
            position: sticky;
            margin-bottom: 20px;
            transform-origin: center top;
            transition: transform 0.3s ease, opacity 0.3s ease;
          }

          .stacking-card:nth-child(1) { top: 80px; z-index: 12; }
          .stacking-card:nth-child(2) { top: 85px; z-index: 11; }
          .stacking-card:nth-child(3) { top: 90px; z-index: 10; }
          .stacking-card:nth-child(4) { top: 95px; z-index: 9; }
          .stacking-card:nth-child(5) { top: 100px; z-index: 8; }
          .stacking-card:nth-child(6) { top: 105px; z-index: 7; }
          .stacking-card:nth-child(7) { top: 110px; z-index: 6; }
          .stacking-card:nth-child(8) { top: 115px; z-index: 5; }
          .stacking-card:nth-child(9) { top: 120px; z-index: 4; }
          .stacking-card:nth-child(10) { top: 125px; z-index: 3; }
          .stacking-card:nth-child(11) { top: 130px; z-index: 2; }
          .stacking-card:nth-child(12) { top: 135px; z-index: 1; }
          .stacking-card:nth-child(13) { top: 140px; z-index: 0; }
          .stacking-card:nth-child(14) { top: 145px; z-index: -1; }
          .stacking-card:nth-child(15) { top: 150px; z-index: -2; }

          .stacking-card.stacking {
            transform: scale(0.95);
            opacity: 0.7;
          }

          .stacking-card.stacked {
            transform: scale(0.9);
            opacity: 0.4;
          }
        }
      `}</style>
    </section>
  );
}
