import { GlassCard } from './GlassCard';
import { DCoreButton } from './DCoreButton';
import './CTASection.css';

export function CTASection() {
  return (
    <section className="cta">
      <div className="container">
        <GlassCard variant="large" className="cta-card">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Business?</h2>
            <p className="cta-description">
              Join thousands of companies already using D'CORE Systems to power their AI initiatives
            </p>
            <div className="cta-actions">
              <DCoreButton variant="secondary" size="large">
                Schedule Demo
              </DCoreButton>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
