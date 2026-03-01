import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { MascotTip } from "@/components/MascotTip";
import { MascotFrame } from "@/components/MascotFrame";
import { MacbookBrowserCard } from "@/components/MacbookBrowserCard";
import { SolutionNav } from "@/components/SolutionNav";
import { Seo } from "@/components/seo/Seo";
import { SEO_PAGE_PRESETS } from "@/seo/pagePresets";
import {
  organizationSchema,
  softwareApplicationSchema,
  websiteSchema,
} from "@/seo/schema";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const painPoints = [
  "Leads not converting",
  "Missed follow-ups",
  "Manual call bookings",
  "Payment chasing",
  "Tool overload",
];

const solutions = [
  "High-converting coaching funnels",
  "WhatsApp & email follow-ups",
  "Calendar booking with reminders",
  "Razorpay payments + invoices",
  "CRM with lead stages",
  "Post-sale upsell automations",
];

export default function CoachesPage() {
  const seo = SEO_PAGE_PRESETS.coaches;

  return (
    <Layout>
      <Seo
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
        ogTitle={seo.ogTitle}
        ogDescription={seo.ogDescription}
        ogUrl={seo.ogUrl}
        ogImage={seo.ogImage}
        twitterCard={seo.twitterCard}
        jsonLd={[organizationSchema, websiteSchema, softwareApplicationSchema]}
      />
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Dcore Systems for Coaches
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Stop losing leads and start scaling your coaching business with automation.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/book-demo">Book Free Demo for Coaches</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Pain Points */}
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

            {/* Solutions */}
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
            message="I follow up with your leads even when you're busy coaching."
            className="mt-12 max-w-3xl mx-auto"
          />

          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">See How It Works</h3>
            <MascotFrame youtubeUrl="https://youtu.be/6M6tS4nCN1Y" />
          </div>
        </div>
      </section>

      <CTASection 
        title="Automate Your Coaching Business"
        subtitle="Join hundreds of coaches using Dcore Systems to scale their practice."
        ctaText="Book Free Demo for Coaches"
      />
    </Layout>
  );
}
