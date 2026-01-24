import { Layout } from "@/components/Layout";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ComparisonNav } from "@/components/ComparisonNav";
import { CTASection } from "@/components/CTASection";
import { MascotTip } from "@/components/MascotTip";

const comparisonData = [
  {
    useCase: "Marketing Funnels",
    aiBunty: "High-converting funnels included",
    competitor: "WhatsApp-only tool",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "CRM & Pipelines",
    aiBunty: "Full CRM with stages",
    competitor: "Basic contact list",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "Payment Collection",
    aiBunty: "Razorpay integration",
    competitor: "Not included",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "Booking System",
    aiBunty: "Calendar + reminders",
    competitor: "Not included",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "WhatsApp Automation",
    aiBunty: "Full automation suite",
    competitor: "Core feature",
    aiBuntyHas: true,
    competitorHas: true,
  },
];

export default function CompareAiSensy() {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ai Bunty vs AiSensy
            </h1>
            <p className="text-xl text-muted-foreground">
              AiSensy is a WhatsApp-only tool. Ai Bunty is a complete business operating system.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl shadow-soft border border-border overflow-hidden mb-12">
            <ComparisonTable competitorName="AiSensy" rows={comparisonData} />
          </div>

          <ComparisonNav />

          <MascotTip 
            message="Choose Ai Bunty if you need WhatsApp PLUS funnels, CRM, payments, and booking — not just messaging."
            className="max-w-3xl mx-auto"
          />
        </div>
      </section>

      <CTASection ctaText="Book Free Demo" />
    </Layout>
  );
}
