import { Check } from 'lucide-react';
import { GlassCard } from './GlassCard';
import './ShowcaseSection.css';
import mascotImage from '@/assets/ai-bunty-mascot.png';

const features = [
  'Real-time AI Analysis',
  'Custom Model Training',
  'Automated Workflows',
  'Advanced Analytics',
  'Multi-channel Deployment',
  'Predictive Insights'
];

export function ShowcaseSection() {
  return (
    <section className="showcase">
      <div className="container showcase-grid">
        <div className="showcase-content">
          <h2>Why Choose D'CORE?</h2>
          <p>We combine cutting-edge AI technology with beautiful, intuitive design to deliver solutions that actually work.</p>

          <div className="showcase-features">
            {features.map((feature) => (
              <div key={feature} className="showcase-feature">
                <Check size={20} className="feature-check" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="showcase-image">
          <GlassCard variant="large">
            <img
              src={mascotImage}
              alt="Ai Bunty Mascot"
              className="showcase-mascot"
            />
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
