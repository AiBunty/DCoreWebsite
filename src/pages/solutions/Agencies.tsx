import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { MascotTip } from "@/components/MascotTip";
import { CheckCircle2 } from "lucide-react";

const features = [
  "White-label platform",
  "Client management",
  "Funnels + CRM",
  "Team dashboards",
  "Reselling capability",
];

export default function AgenciesPage() {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ai Bunty for Agencies & Digital Businesses
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Launch your own SaaS. White-label Ai Bunty and resell to your clients.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/book-demo">Launch Your Own SaaS with Ai Bunty</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-accent rounded-2xl p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-7 h-7 text-primary" />
                What Agencies Get
              </h2>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <MascotTip 
              message="I help you manage multiple clients from one dashboard and even let you resell me!"
              className="mt-12"
            />
          </div>
        </div>
      </section>

      <CTASection 
        title="Scale Your Agency"
        subtitle="White-label Ai Bunty and offer it to your clients as your own product."
        ctaText="Launch Your Own SaaS with Ai Bunty"
      />
    </Layout>
  );
}
