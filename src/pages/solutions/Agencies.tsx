import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { MascotTip } from "@/components/MascotTip";
import { MascotFrame } from "@/components/MascotFrame";
import { MacbookBrowserCard } from "@/components/MacbookBrowserCard";
import { SolutionNav } from "@/components/SolutionNav";
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
              Dcore Systems for Agencies & Digital Businesses
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Launch your own SaaS. White-label Dcore Systems and resell to your clients.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/book-demo">Launch Your Own SaaS with Dcore Systems</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <MacbookBrowserCard
              title="What Agencies Get"
              icon={CheckCircle2}
              iconClassName="text-primary"
              bodyClassName="bg-accent/40"
            >
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </MacbookBrowserCard>

            <SolutionNav />

            <MascotTip 
              message="I help you manage multiple clients from one dashboard and even let you resell me!"
              className="mt-12"
            />

            <div className="mt-16">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">See How It Works</h3>
              <MascotFrame youtubeUrl="https://youtu.be/6M6tS4nCN1Y" />
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Scale Your Agency"
        subtitle="White-label Dcore Systems and offer it to your clients as your own product."
        ctaText="Launch Your Own SaaS with Dcore Systems"
      />
    </Layout>
  );
}
