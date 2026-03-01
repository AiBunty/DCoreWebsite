import { Layout } from "@/components/Layout";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ComparisonNav } from "@/components/ComparisonNav";
import { CTASection } from "@/components/CTASection";
import { MascotTip } from "@/components/MascotTip";

const comparisonData = [
  {
    useCase: "Marketing Funnels",
    aiBunty: "Built-in high-converting funnels",
    competitor: "AI website builder",
    aiBuntyHas: true,
    competitorHas: true,
  },
  {
    useCase: "CRM & Lead Tracking",
    aiBunty: "Full CRM with pipelines",
    competitor: "Learner database only",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "WhatsApp Automation",
    aiBunty: "Native CRM integration",
    competitor: "White-label marketing only",
    aiBuntyHas: true,
    competitorHas: true,
  },
  {
    useCase: "Sales Pipeline Management",
    aiBunty: "Visual pipeline stages",
    competitor: "Not included",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "Business Focus",
    aiBunty: "Complete business OS",
    competitor: "Course creation platform",
    aiBuntyHas: true,
    competitorHas: false,
  },
];

export default function CompareGraphy() {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Dcore Systems vs Graphy
            </h1>
            <p className="text-xl text-muted-foreground">
              Graphy is an AI-powered course platform. Dcore Systems is a complete business operating system with sales CRM.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl shadow-soft border border-border overflow-hidden mb-12">
            <ComparisonTable competitorName="Graphy" rows={comparisonData} />
          </div>

          <ComparisonNav />

          <MascotTip 
            message="Choose Dcore Systems if you want to sell courses AND manage your entire business from one dashboard."
            className="max-w-3xl mx-auto"
          />
        </div>
      </section>

      <CTASection ctaText="Book Free Demo" />
    </Layout>
  );
}
