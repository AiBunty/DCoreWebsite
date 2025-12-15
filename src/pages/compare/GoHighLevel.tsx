import { Layout } from "@/components/Layout";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CTASection } from "@/components/CTASection";
import { MascotTip } from "@/components/MascotTip";

const comparisonData = [
  {
    useCase: "India-First Design",
    aiBunty: "Built for Indian businesses",
    competitor: "US-focused platform",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "WhatsApp Integration",
    aiBunty: "Native WhatsApp automation",
    competitor: "Requires workarounds",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "Pricing",
    aiBunty: "Affordable for SMBs",
    competitor: "Premium pricing ($297+/mo)",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "Done-With-You Support",
    aiBunty: "Included",
    competitor: "Extra cost",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "Indian Payment Gateways",
    aiBunty: "Razorpay + UPI native",
    competitor: "Limited support",
    aiBuntyHas: true,
    competitorHas: false,
  },
];

export default function CompareGoHighLevel() {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ai Bunty vs GoHighLevel
            </h1>
            <p className="text-xl text-muted-foreground">
              GoHighLevel is built for US agencies. Ai Bunty is built for Indian service businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl shadow-soft border border-border overflow-hidden mb-12">
            <ComparisonTable competitorName="GoHighLevel" rows={comparisonData} />
          </div>

          <MascotTip 
            message="Choose Ai Bunty if you want a powerful platform designed specifically for Indian market needs."
            className="max-w-3xl mx-auto"
          />
        </div>
      </section>

      <CTASection ctaText="Book Free Demo" />
    </Layout>
  );
}
