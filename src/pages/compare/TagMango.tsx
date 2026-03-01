import { Layout } from "@/components/Layout";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ComparisonNav } from "@/components/ComparisonNav";
import { CTASection } from "@/components/CTASection";
import { MascotTip } from "@/components/MascotTip";

const comparisonData = [
  {
    useCase: "Marketing Funnels",
    aiBunty: "High-converting funnels + CRM",
    competitor: "Course landing pages",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "Lead Management",
    aiBunty: "Full CRM with pipelines",
    competitor: "Basic student database",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "WhatsApp Automation",
    aiBunty: "Advanced automation + CRM",
    competitor: "Basic campaigns only",
    aiBuntyHas: true,
    competitorHas: true,
  },
  {
    useCase: "Sales Pipeline Tracking",
    aiBunty: "Visual pipeline stages",
    competitor: "Not included",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "Business OS",
    aiBunty: "Complete operating system",
    competitor: "Course hosting focus",
    aiBuntyHas: true,
    competitorHas: false,
  },
];

export default function CompareTagMango() {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Dcore Systems vs TagMango
            </h1>
            <p className="text-xl text-muted-foreground">
              TagMango excels at course delivery. Dcore Systems adds sales funnels, CRM, and advanced WhatsApp automation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl shadow-soft border border-border overflow-hidden mb-12">
            <ComparisonTable competitorName="TagMango" rows={comparisonData} />
          </div>

          <ComparisonNav />

          <MascotTip 
            message="Choose Dcore Systems if you need more than just course hosting - you need a complete business growth system."
            className="max-w-3xl mx-auto"
          />
        </div>
      </section>

      <CTASection ctaText="Book Free Demo" />
    </Layout>
  );
}
