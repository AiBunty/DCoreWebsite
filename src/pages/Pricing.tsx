import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { GlassCard, GlassBadge, GlassSection } from "@/components/GlassCard";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹4,999",
    period: "/month",
    description: "Perfect for solopreneurs getting started",
    features: [
      "1 User",
      "500 Contacts",
      "Basic Funnels",
      "WhatsApp Integration",
      "Email Support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Growth",
    price: "₹9,999",
    period: "/month",
    description: "For growing businesses with teams",
    features: [
      "5 Users",
      "5,000 Contacts",
      "Advanced Funnels",
      "WhatsApp Automation",
      "CRM & Pipelines",
      "Payment Integration",
      "Priority Support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Scale",
    price: "₹24,999",
    period: "/month",
    description: "For established businesses scaling up",
    features: [
      "Unlimited Users",
      "Unlimited Contacts",
      "All Features",
      "White-label Option",
      "API Access",
      "Dedicated Support",
      "Done-With-You Setup",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground">
              Choose the plan that fits your business. All plans include a 14-day free trial.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <GlassCard 
                key={index}
                premium={plan.popular}
                className="flex flex-col"
              >
                <div className="glass-card-content p-8 flex flex-col h-full">
                  {plan.popular && (
                    <div className="mb-4">
                      <GlassBadge>Most Popular</GlassBadge>
                    </div>
                  )}
                  
                  <div className="text-center mb-6 flex-grow">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-foreground">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={plan.popular ? "default" : "outline"} 
                    className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                    size="lg"
                    asChild
                  >
                    <Link to="/book-demo">{plan.cta}</Link>
                  </Button>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Not Sure Which Plan?"
        subtitle="Book a free demo and we'll help you choose the right plan for your business."
      />
    </Layout>
  );
}
