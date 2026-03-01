import { Layout } from "@/components/Layout";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ComparisonNav } from "@/components/ComparisonNav";
import { CTASection } from "@/components/CTASection";
import { MascotTip } from "@/components/MascotTip";

const comparisonData = [
  {
    useCase: "India-First Design",
    aiBunty: "Built for Indian businesses",
    competitor: "US agency-focused",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "WhatsApp Integration",
    aiBunty: "Native WhatsApp automation",
    competitor: "Paid add-on ($10/mo)",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "Pricing",
    aiBunty: "Affordable for SMBs",
    competitor: "$297/month (₹24,000+)",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "Done-With-You Support",
    aiBunty: "Included",
    competitor: "DIY with community",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "Indian Payment Gateways",
    aiBunty: "Razorpay + UPI native",
    competitor: "Razorpay via integration",
    aiBuntyHas: true,
    competitorHas: true,
  },
];

export default function CompareGoHighLevel() {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Dcore Systems vs GoHighLevel
            </h1>
            <p className="text-xl text-muted-foreground">
              GoHighLevel is built for US agencies. Dcore Systems is built for Indian service businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl shadow-soft border border-border overflow-hidden mb-12">
            <ComparisonTable competitorName="GoHighLevel" rows={comparisonData} />
          </div>

          <ComparisonNav />

          <MascotTip 
            message="Choose Dcore Systems if you want a powerful platform designed specifically for Indian market needs."
            className="max-w-3xl mx-auto"
          />
        </div>
      </section>

      <CTASection ctaText="Book Free Demo" />
    </Layout>
  );
}
