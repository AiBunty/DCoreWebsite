import { Layout } from "@/components/Layout";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CTASection } from "@/components/CTASection";
import { MascotTip } from "@/components/MascotTip";

const comparisonData = [
  {
    useCase: "Marketing Funnels",
    aiBunty: "Built-in high-converting funnels",
    competitor: "Basic landing pages",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "CRM & Lead Tracking",
    aiBunty: "Full CRM with pipelines",
    competitor: "Student database only",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "WhatsApp Integration",
    aiBunty: "Native automation",
    competitor: "Not available",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "Booking & Appointments",
    aiBunty: "Calendar + reminders",
    competitor: "Not included",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "India Payment Focus",
    aiBunty: "Razorpay + UPI native",
    competitor: "Limited options",
    aiBuntyHas: true,
    competitorHas: true,
  },
];

export default function CompareGraphy() {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ai Bunty vs Graphy
            </h1>
            <p className="text-xl text-muted-foreground">
              Graphy hosts your content. Ai Bunty grows your business with CRM-driven automation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl shadow-soft border border-border overflow-hidden mb-12">
            <ComparisonTable competitorName="Graphy" rows={comparisonData} />
          </div>

          <MascotTip 
            message="Choose Ai Bunty if you want to sell courses AND manage your entire business from one dashboard."
            className="max-w-3xl mx-auto"
          />
        </div>
      </section>

      <CTASection ctaText="Book Free Demo" />
    </Layout>
  );
}
