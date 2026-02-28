import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { MascotTip } from "@/components/MascotTip";
import { MascotFrame } from "@/components/MascotFrame";
import { MacbookBrowserCard } from "@/components/MacbookBrowserCard";
import { SolutionNav } from "@/components/SolutionNav";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const painPoints = [
  "Lost Meta ad leads",
  "No site visit follow-ups",
  "No team visibility",
  "Manual CRM management",
];

const solutions = [
  "Lead capture from Meta ads",
  "WhatsApp auto-replies",
  "Site visit booking & reminders",
  "Team-wise lead assignment",
  "Sales pipeline & analytics",
];

export default function RealEstatePage() {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Dcore Systems for Real Estate Professionals
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Never lose another property lead. Automate follow-ups and close more deals.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/book-demo">See How Dcore Systems Closes More Property Deals</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <MacbookBrowserCard title="Common Pain Points" icon={AlertCircle} iconClassName="text-destructive">
              <ul className="space-y-4">
                {painPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-destructive" />
                    {point}
                  </li>
                ))}
              </ul>
            </MacbookBrowserCard>

            <MacbookBrowserCard
              title="How Dcore Systems Helps"
              icon={CheckCircle2}
              iconClassName="text-primary"
              bodyClassName="bg-accent/40"
            >
              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    {solution}
                  </li>
                ))}
              </ul>
            </MacbookBrowserCard>
          </div>

          <SolutionNav />

          <MascotTip 
            message="I capture every lead from your ads and follow up until they book a site visit."
            className="mt-12 max-w-3xl mx-auto"
          />

          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">See How It Works</h3>
            <MascotFrame youtubeUrl="https://youtu.be/6M6tS4nCN1Y" />
          </div>
        </div>
      </section>

      <CTASection 
        title="Close More Property Deals"
        ctaText="See How Dcore Systems Closes More Property Deals"
      />
    </Layout>
  );
}
