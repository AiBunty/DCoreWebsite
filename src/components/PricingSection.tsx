import { Check } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { DCoreButton } from './DCoreButton';
import './PricingSection.css';

const plans = [
  {
    name: 'Starter',
    price: 29,
    description: 'Perfect for getting started',
    features: ['Up to 10k requests/month', 'Basic analytics', 'Email support', 'Community access']
  },
  {
    name: 'Professional',
    price: 79,
    description: 'Best for growing teams',
    features: ['Unlimited requests', 'Advanced analytics', 'Priority support', 'Custom integrations', 'API access'],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 199,
    description: 'For large organizations',
    features: ['Unlimited everything', 'Dedicated support', 'Custom training', 'SLA guarantee', 'White-label options']
  }
];

export function PricingSection() {
  return (
    <section className="pricing">
      <div className="container">
        <div className="pricing-header">
          <h2>Simple, Transparent Pricing</h2>
          <p>Choose the perfect plan for your needs</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <GlassCard
              key={plan.name}
              variant={plan.popular ? 'hover' : 'default'}
              className={`pricing-card ${plan.popular ? 'pricing-card-popular' : ''}`}
            >
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <h3>{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">{plan.price}</span>
                <span className="period">/month</span>
              </div>

              <DCoreButton
                variant={plan.popular ? 'primary' : 'secondary'}
                size="large"
                className="plan-button"
              >
                Get Started
              </DCoreButton>

              <ul className="plan-features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
