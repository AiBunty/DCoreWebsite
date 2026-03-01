import { Layout } from "@/components/Layout";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ComparisonNav } from "@/components/ComparisonNav";
import { CTASection } from "@/components/CTASection";
import { MascotTip } from "@/components/MascotTip";

const comparisonData = [
  {
    useCase: "WhatsApp CRM Integration",
    aiBunty: "Native WhatsApp CRM",
    competitor: "WhatsApp marketing tools only",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "India-First Design & Pricing",
    aiBunty: "Built for Indian businesses",
    competitor: "Global focus",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "Integrated Booking Calendar",
    aiBunty: "Built-in with WhatsApp sync",
    competitor: "Available separately",
    aiBuntyHas: true,
    competitorHas: true,
  },
  {
    useCase: "Done-With-You Support",
    aiBunty: "Included",
    competitor: "Self-service focused",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "All-in-One Business OS",
    aiBunty: "CRM + Funnels + WhatsApp",
    competitor: "Funnel-focused platform",
    aiBuntyHas: true,
    competitorHas: false,
  },
];

export default function CompareFlexifunnels() {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Dcore Systems vs Flexifunnels
            </h1>
            <p className="text-xl text-muted-foreground">
              Flexifunnels is a powerful funnel platform. Dcore Systems adds native WhatsApp CRM for Indian businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl shadow-soft border border-border overflow-hidden mb-12">
            <ComparisonTable competitorName="Flexifunnels" rows={comparisonData} />
          </div>

          <ComparisonNav />

          <MascotTip 
            message="Choose Dcore Systems if you need integrated WhatsApp CRM with Indian market focus, not just funnel building."
            className="max-w-3xl mx-auto"
          />
        </div>
      </section>

      <CTASection ctaText="Book Free Demo" />
    </Layout>
  );
}
