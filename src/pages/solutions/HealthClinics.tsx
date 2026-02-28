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
  "Patient no-shows hurting revenue",
  "Appointment scheduling chaos",
  "Manual reminder calls eating staff time",
  "Follow-up gaps after treatment",
  "Scattered patient records",
  "No system for health tips & engagement",
];

const solutions = [
  "Automated appointment reminders via WhatsApp",
  "Online booking with instant confirmation",
  "Patient CRM with complete history",
  "Post-visit follow-up automation",
  "Health tips & engagement broadcasts",
  "Payment collection & invoicing",
];

export default function HealthClinicsPage() {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Dcore Systems for Health Clinics
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Reduce no-shows and improve patient engagement with smart automation for doctors & clinics.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/book-demo">Book Free Demo</Link>
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
            message="I send appointment reminders to patients so your staff doesn't have to call them manually."
            className="mt-12 max-w-3xl mx-auto"
          />

          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">See How It Works</h3>
            <MascotFrame youtubeUrl="https://youtu.be/6M6tS4nCN1Y" />
          </div>
        </div>
      </section>

      <CTASection 
        title="Modernize Your Clinic Operations"
        subtitle="Join clinics using Dcore Systems to reduce no-shows and engage patients."
        ctaText="Book Free Demo"
      />
    </Layout>
  );
}
