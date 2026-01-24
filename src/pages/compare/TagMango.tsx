import { Layout } from "@/components/Layout";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ComparisonNav } from "@/components/ComparisonNav";
import { CTASection } from "@/components/CTASection";
import { MascotTip } from "@/components/MascotTip";

const comparisonData = [
  {
    useCase: "Course + Coaching Hybrid",
    aiBunty: "Funnels + CRM + WhatsApp in one",
    competitor: "Course platform only",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "Lead Management",
    aiBunty: "Full CRM with pipelines",
    competitor: "Basic student management",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "WhatsApp Automation",
    aiBunty: "Built-in automation",
    competitor: "Not available",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "Payment Follow-ups",
    aiBunty: "Automated reminders",
    competitor: "Manual process",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "Team Management",
    aiBunty: "Multi-user with roles",
    competitor: "Limited",
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
              Ai Bunty vs TagMango
            </h1>
            <p className="text-xl text-muted-foreground">
              TagMango is a course platform. Ai Bunty is a full-stack business automation system.
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
            message="Choose Ai Bunty if you need more than just course hosting — you need a complete business growth system."
            className="max-w-3xl mx-auto"
          />
        </div>
      </section>

      <CTASection ctaText="Book Free Demo" />
    </Layout>
  );
}
