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
  "Appointment no-shows",
  "Manual client follow-ups",
  "No CRM visibility",
];

const solutions = [
  "Booking funnels",
  "WhatsApp confirmations",
  "Client CRM",
  "Automated reminders & invoices",
];

export default function ConsultantsPage() {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Dcore Systems for Consultants & Advisors
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Reduce no-shows, automate follow-ups, and focus on what you do best - advising.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/book-demo">Automate Your Practice with Dcore Systems</Link>
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
            message="I send reminders before every appointment and follow up after to ensure satisfaction."
            className="mt-12 max-w-3xl mx-auto"
          />

          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">See How It Works</h3>
            <MascotFrame youtubeUrl="https://youtu.be/6M6tS4nCN1Y" />
          </div>
        </div>
      </section>

      <CTASection 
        title="Automate Your Practice"
        ctaText="Automate Your Practice with Dcore Systems"
      />
    </Layout>
  );
}
