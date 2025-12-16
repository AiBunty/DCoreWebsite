import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { MascotTip } from "@/components/MascotTip";
import { MascotFrame } from "@/components/MascotFrame";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const painPoints = [
  "Inconsistent lead flow",
  "Project tracking chaos",
  "Chasing clients for payments",
  "No professional portfolio showcase",
  "Communication gaps with clients",
  "Time wasted on admin tasks",
];

const solutions = [
  "Landing pages to capture leads",
  "Project & task management tools",
  "Automated invoicing & payment reminders",
  "Professional portfolio builder",
  "Client communication hub",
  "Proposal & contract automation",
];

export default function FreelancersPage() {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ai Bunty for Freelancers
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get more clients and manage projects effortlessly as an independent business owner.
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
            message="I automatically remind clients about pending invoices so you get paid on time."
            className="mt-12 max-w-3xl mx-auto"
          />

          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">See How It Works</h3>
            <MascotFrame youtubeUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
          </div>
        </div>
      </section>

      <CTASection 
        title="Scale Your Freelance Business"
        subtitle="Join freelancers using Ai Bunty to get more clients and manage projects."
        ctaText="Book Free Demo"
      />
    </Layout>
  );
}
