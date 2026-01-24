import { Zap, Shield, Gauge, Palette, Code, BarChart3 } from 'lucide-react';
import { GlassCard } from './GlassCard';
import './FeaturesSection.css';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Deploy solutions in minutes, not months'
  },
  {
    icon: Shield,
    title: 'Enterprise Secure',
    description: 'Bank-level security and compliance'
  },
  {
    icon: Gauge,
    title: 'Scalable',
    description: 'Grows with your business needs'
  },
  {
    icon: Palette,
    title: 'Beautiful Design',
    description: 'Modern interface that users love'
  },
  {
    icon: Code,
    title: 'Easy Integration',
    description: 'Plug-and-play with your stack'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Deep insights into your data'
  }
];

export function FeaturesSection() {
  return (
    <section className="features">
      <div className="container">
        <div className="features-header">
          <h2>Powerful Features</h2>
          <p>Everything you need to succeed</p>
        </div>

        <div className="features-grid">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <GlassCard key={feature.title} variant="hover" className="feature-card">
                <Icon className="feature-icon" size={32} />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
