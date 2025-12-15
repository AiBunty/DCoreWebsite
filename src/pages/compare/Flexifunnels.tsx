import { Layout } from "@/components/Layout";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CTASection } from "@/components/CTASection";
import { MascotTip } from "@/components/MascotTip";

const comparisonData = [
  {
    useCase: "Coaching Funnel with Calendar & WhatsApp",
    aiBunty: "Complete built-in system",
    competitor: "Page builder only",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "Lead Nurturing Automation",
    aiBunty: "WhatsApp + Email automation",
    competitor: "Needs third-party tools",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "CRM with Team Assignment",
    aiBunty: "Built-in CRM & pipelines",
    competitor: "Not included",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "Done-With-You Support",
    aiBunty: "Yes",
    competitor: "DIY only",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "Post-Sale Upsell Automation",
    aiBunty: "Fully automated",
    competitor: "Manual setup",
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
              Ai Bunty vs Flexifunnels
            </h1>
            <p className="text-xl text-muted-foreground">
              Ai Bunty is a complete business operating system. Flexifunnels is primarily a page builder.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl shadow-soft border border-border overflow-hidden mb-12">
            <ComparisonTable competitorName="Flexifunnels" rows={comparisonData} />
          </div>

          <MascotTip 
            message="Choose Ai Bunty if you want automation, CRM, payments, and WhatsApp follow-ups in one platform."
            className="max-w-3xl mx-auto"
          />
        </div>
      </section>

      <CTASection ctaText="Book Free Demo" />
    </Layout>
  );
}
