import { useEffect, useRef } from "react";
import { LucideIcon } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

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
      <div className="stacking-section-header bg-gradient-to-br from-primary to-purple-600 text-white text-center py-12 px-5">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          Everything You Need to Grow
        </h2>
        <p className="text-sm md:text-base text-white/90">
          Stop juggling multiple tools. Dcore brings it all together.
        </p>
      </div>

      <Section>
        <Container>
          <div 
            ref={cardsRef}
            className="stacking-cards-container grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="stacking-card bg-card rounded-2xl p-4 md:p-5 shadow-sm border border-border transition-all duration-300 hover:-translate-y-1"
                  style={{
                    ['--card-index' as string]: index,
                  }}
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-base font-medium text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-snug">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <style>{`
        @media (max-width: 768px) {
          .stacking-cards-container {
            display: block;
            padding-top: 64px;
            min-height: 160vh;
          }

          .stacking-card {
            position: sticky;
            margin-bottom: 20px;
            transform-origin: center top;
            transition: transform 0.3s ease, opacity 0.3s ease;
          }

          .stacking-card:nth-child(1) { top: 60px; z-index: 12; }
          .stacking-card:nth-child(2) { top: 64px; z-index: 11; }
          .stacking-card:nth-child(3) { top: 68px; z-index: 10; }
          .stacking-card:nth-child(4) { top: 72px; z-index: 9; }
          .stacking-card:nth-child(5) { top: 76px; z-index: 8; }
          .stacking-card:nth-child(6) { top: 80px; z-index: 7; }
          .stacking-card:nth-child(7) { top: 84px; z-index: 6; }
          .stacking-card:nth-child(8) { top: 88px; z-index: 5; }
          .stacking-card:nth-child(9) { top: 92px; z-index: 4; }
          .stacking-card:nth-child(10) { top: 96px; z-index: 3; }
          .stacking-card:nth-child(11) { top: 100px; z-index: 2; }
          .stacking-card:nth-child(12) { top: 104px; z-index: 1; }
          .stacking-card:nth-child(13) { top: 108px; z-index: 0; }
          .stacking-card:nth-child(14) { top: 112px; z-index: -1; }
          .stacking-card:nth-child(15) { top: 116px; z-index: -2; }

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
