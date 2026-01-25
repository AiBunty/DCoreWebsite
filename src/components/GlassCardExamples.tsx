/**
 * Glass Card Component System Documentation & Examples
 * 
 * This file demonstrates how to use the GlassCard system across your website.
 * Copy and adapt these patterns for your own pages.
 */

import { GlassCard, GlassBadge, GlassSection } from '@/components/GlassCard';

/**
 * EXAMPLE 1: Pricing Cards (Featured/Premium)
 */
export function PricingCardsExample() {
  return (
    <GlassSection className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Regular card */}
          <GlassCard>
            <div className="glass-card-content p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Starter</h3>
              <p className="text-muted-foreground mb-4">Perfect for beginners</p>
              <div className="text-3xl font-bold text-primary mb-8">$29</div>
              <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90">
                Get Started
              </button>
            </div>
          </GlassCard>

          {/* Premium/Featured card */}
          <GlassCard premium>
            <div className="glass-card-content p-8">
              <GlassBadge className="mb-4">Most Popular</GlassBadge>
              <h3 className="text-xl font-bold text-foreground mb-4">Professional</h3>
              <p className="text-muted-foreground mb-4">Best for growing teams</p>
              <div className="text-3xl font-bold text-primary mb-8">$79</div>
              <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90">
                Get Started
              </button>
            </div>
          </GlassCard>

          {/* Regular card */}
          <GlassCard>
            <div className="glass-card-content p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Enterprise</h3>
              <p className="text-muted-foreground mb-4">For large organizations</p>
              <div className="text-3xl font-bold text-primary mb-8">Custom</div>
              <button className="w-full border border-primary text-primary py-2 rounded-lg hover:bg-primary/10">
                Contact Sales
              </button>
            </div>
          </GlassCard>
        </div>
      </div>
    </GlassSection>
  );
}

/**
 * EXAMPLE 2: Feature Cards with Icons
 */
export function FeatureCardsExample() {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized performance for smooth user experience'
    },
    {
      icon: '🎯',
      title: 'Highly Customizable',
      description: 'Adapt the design to match your brand perfectly'
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and uptime'
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <GlassCard key={idx} className="text-center">
              <div className="glass-card-content p-8">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * EXAMPLE 3: Testimonial Cards
 */
export function TestimonialCardsExample() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      content: 'This component system transformed our design workflow.',
      avatar: '👩‍💼'
    },
    {
      name: 'Mike Chen',
      role: 'Product Manager',
      content: 'The frosted glass effect looks absolutely premium.',
      avatar: '👨‍💼'
    },
    {
      name: 'Emma Davis',
      role: 'Designer',
      content: 'Love how smooth the hover animations are!',
      avatar: '👩‍🎨'
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <GlassCard key={idx}>
              <div className="glass-card-content p-8">
                <p className="text-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * EXAMPLE 4: Custom Content Card
 */
export function CustomContentExample() {
  return (
    <GlassCard premium className="max-w-lg">
      <div className="glass-card-content p-12">
        <GlassBadge className="mb-4">New Feature</GlassBadge>
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Advanced Analytics
        </h2>
        <p className="text-muted-foreground mb-6">
          Get deep insights into your business performance with our new analytics dashboard.
        </p>
        <div className="flex gap-3">
          <button className="flex-1 bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90">
            Learn More
          </button>
          <button className="flex-1 border border-primary text-primary py-2 rounded-lg hover:bg-primary/10">
            Demo
          </button>
        </div>
      </div>
    </GlassCard>
  );
}

/**
 * CSS CLASS REFERENCE
 * 
 * Main Classes:
 * - .glass-card           : Base frosted glass card
 * - .glass-card.premium   : Enhanced glow for featured cards
 * - .glass-section-bg     : Background wrapper with gradients
 * - .glass-card-content   : Content wrapper (z-index management)
 * - .glass-badge          : Small badge/label styling
 * 
 * Styling Customization:
 * - All colors use CSS variables from src/index.css
 * - Backdrop blur: 10px (can be adjusted)
 * - Border radius: 1rem (16px)
 * - Hover transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1)
 * - Scale on hover: 1.03 (3%)
 * 
 * Color System:
 * - Background: hsl(15 40% 8%)
 * - Card: hsl(15 40% 12%)
 * - Primary: hsl(25 95% 55%) - Orange
 * - Glow: Layered orange to red gradients
 */

/**
 * BEST PRACTICES
 * 
 * 1. Always wrap card content with .glass-card-content div
 * 2. Use GlassSection for section backgrounds with multiple cards
 * 3. Apply premium={true} to featured/highlighted cards
 * 4. Keep text color as foreground/muted-foreground for contrast
 * 5. Use primary color for interactive elements (buttons, links)
 * 6. For full-width sections, use GlassSection to manage background
 * 7. Cards should have consistent padding (p-8 recommended)
 * 8. Use GlassBadge for labels/tags within cards
 */
