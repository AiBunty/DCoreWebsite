import { Layout } from "@/components/Layout";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ComparisonNav } from "@/components/ComparisonNav";
import { CTASection } from "@/components/CTASection";
import { MascotTip } from "@/components/MascotTip";

const comparisonData = [
  {
    useCase: "WhatsApp Automation",
    aiBunty: "Native integration",
    competitor: "Not available",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "India Payment Support",
    aiBunty: "Razorpay + UPI",
    competitor: "International cards focus",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "Pricing (Monthly)",
    aiBunty: "Affordable for Indian market",
    competitor: "$149+/month",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "CRM with Pipelines",
    aiBunty: "Full-featured CRM",
    competitor: "Basic contact management",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "Local Support",
    aiBunty: "Indian timezone support",
    competitor: "US timezone only",
    aiBuntyHas: true,
    competitorHas: false,
  },
];

export default function CompareKajabi() {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ai Bunty vs Kajabi
            </h1>
            <p className="text-xl text-muted-foreground">
              Kajabi is a premium US course platform. Ai Bunty adds WhatsApp CRM for Indian businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl shadow-soft border border-border overflow-hidden mb-12">
            <ComparisonTable competitorName="Kajabi" rows={comparisonData} />
          </div>

          <ComparisonNav />

          <MascotTip 
            message="Choose Ai Bunty if you want Kajabi-level features with WhatsApp automation at Indian pricing."
            className="max-w-3xl mx-auto"
          />
        </div>
      </section>

      <CTASection ctaText="Book Free Demo" />
    </Layout>
  );
}
