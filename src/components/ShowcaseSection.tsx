import { Check } from 'lucide-react';
import { GlassCard } from './GlassCard';
import './ShowcaseSection.css';
const showcaseImage =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80";

const features = [
  'WhatsApp Business API implementation',
  'CRM and ERP development',
  'Cloud-based software architecture',
  'Bulk messaging systems',
  'Website and e-commerce development',
  'Digital marketing automation'
];

export function ShowcaseSection() {
  return (
    <section className="showcase">
      <div className="container showcase-grid">
        <div className="showcase-content">
          <h2>Why Choose D'CORE?</h2>
          <p>
            We combine engineering, automation, and communication expertise to deliver systems that
            solve real operational challenges.
          </p>

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
              src={showcaseImage}
              alt="Dcore Systems team collaborating on digital transformation"
              className="showcase-mascot"
            />
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
