import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { GlassCard, GlassBadge } from "@/components/GlassCard";
import { Check } from "lucide-react";
import SEO from "@/components/SEO";
import { buildBreadcrumbJsonLd, canonicalUrl } from "@/seo/seoUtils";
import { softwareApplicationSchema } from "@/seo/schema";

const plans = [
  {
    name: "Starter",
    price: "INR 4,999",
    period: "/month",
    description: "Perfect for solopreneurs getting started",
    features: [
      "1 User",
      "500 Contacts",
      "Basic Funnels",
      "WhatsApp Business API enabled",
      "Email Support",
    ],
    cta: "Book Demo",
    popular: false,
  },
  {
    name: "Growth",
    price: "INR 9,999",
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
    cta: "Book Demo",
    popular: true,
  },
  {
    name: "Scale",
    price: "INR 24,999",
    period: "/month",
    description: "For established businesses scaling up",
    features: [
      "Unlimited Users",
      "Unlimited Contacts",
      "All Features",
      "White-label Option",
      "Dedicated Support",
      "Done-With-You Setup",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <SEO
        title="Dcore Pricing | WhatsApp API Included Plans"
        description="Simple pricing for AI automation, funnels, CRM, and WhatsApp Business API enabled onboarding."
        canonical={canonicalUrl("/pricing")}
        jsonLd={[
          softwareApplicationSchema,
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
          ]),
        ]}
      />
      <Layout>
        <section className="py-16 md:py-24 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-muted-foreground">
                Choose the plan that fits your business.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {plans.map((plan) => (
                <GlassCard
                  key={plan.name}
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
                        <span className="text-4xl font-bold text-foreground">
                          {plan.price}
                        </span>
                        <span className="text-muted-foreground">{plan.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-foreground">
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant={plan.popular ? "default" : "outline"}
                      className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
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
        <address style={{ marginTop: 32, textAlign: "center" }}>
          <strong>Dcore Systems</strong>
          <br />
          [Address Placeholder]
          <br />
          [Phone Placeholder]
          <br />
          [Legal Info Placeholder]
        </address>
      </Layout>
    </>
  );
}
