import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { MascotTip } from "@/components/MascotTip";
import { MascotFrame } from "@/components/MascotFrame";
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
              Ai Bunty for Health Clinics
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
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <AlertCircle className="w-7 h-7 text-destructive" />
                Common Pain Points
              </h2>
              <ul className="space-y-4">
                {painPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-destructive" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-accent rounded-2xl p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-7 h-7 text-primary" />
                How Ai Bunty Helps
              </h2>
              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    {solution}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <MascotTip 
            message="I send appointment reminders to patients so your staff doesn't have to call them manually."
            className="mt-12 max-w-3xl mx-auto"
          />

          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">See How It Works</h3>
            <MascotFrame youtubeUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
          </div>
        </div>
      </section>

      <CTASection 
        title="Modernize Your Clinic Operations"
        subtitle="Join clinics using Ai Bunty to reduce no-shows and engage patients."
        ctaText="Book Free Demo"
      />
    </Layout>
  );
}
