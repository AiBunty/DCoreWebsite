import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { MascotTip } from "@/components/MascotTip";
import { MascotFrame } from "@/components/MascotFrame";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const painPoints = [
  "Inquiry overload",
  "Missed WhatsApp replies",
  "No structured pipeline",
];

const solutions = [
  "Inquiry funnels",
  "Auto WhatsApp replies",
  "Lead tagging by event type",
  "Payment follow-ups",
];

export default function EventsPage() {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ai Bunty for Event & Wedding Professionals
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Never miss an inquiry. Organize leads by event type and automate follow-ups.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/book-demo">Never Miss an Event Lead Again</Link>
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
            message="I respond to every inquiry instantly and organize them by event type automatically."
            className="mt-12 max-w-3xl mx-auto"
          />

          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">See How It Works</h3>
            <MascotFrame youtubeUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
          </div>
        </div>
      </section>

      <CTASection 
        title="Capture Every Event Lead"
        ctaText="Never Miss an Event Lead Again"
      />
    </Layout>
  );
}
