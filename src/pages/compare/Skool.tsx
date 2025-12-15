import { Layout } from "@/components/Layout";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CTASection } from "@/components/CTASection";
import { MascotTip } from "@/components/MascotTip";

const comparisonData = [
  {
    useCase: "Marketing Funnels",
    aiBunty: "High-converting landing pages",
    competitor: "Community-only platform",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "CRM & Lead Management",
    aiBunty: "Full sales pipeline",
    competitor: "Not available",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "WhatsApp Automation",
    aiBunty: "Native integration",
    competitor: "Not available",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "Payment & Invoicing",
    aiBunty: "Razorpay + auto-invoicing",
    competitor: "Basic Stripe only",
    aiBuntyHas: true,
    competitorHas: true,
  },
  {
    useCase: "India Market Focus",
    aiBunty: "Built for India",
    competitor: "US-focused",
    aiBuntyHas: true,
    competitorHas: false,
  },
];

export default function CompareSkool() {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ai Bunty vs Skool
            </h1>
            <p className="text-xl text-muted-foreground">
              Skool is a community platform. Ai Bunty is an end-to-end business operating system.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl shadow-soft border border-border overflow-hidden mb-12">
            <ComparisonTable competitorName="Skool" rows={comparisonData} />
          </div>

          <MascotTip 
            message="Choose Ai Bunty if you need community PLUS sales funnels, CRM, and WhatsApp automation in one platform."
            className="max-w-3xl mx-auto"
          />
        </div>
      </section>

      <CTASection ctaText="Book Free Demo" />
    </Layout>
  );
}
