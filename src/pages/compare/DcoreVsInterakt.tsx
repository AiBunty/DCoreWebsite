import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CTASection } from "@/components/CTASection";
import { Seo } from "@/components/seo/Seo";
import { buildBreadcrumbJsonLd, canonicalUrl } from "@/seo/seoUtils";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const comparisonData = [
  {
    useCase: "Funnels & landing pages",
    aiBunty: "AI funnel builder and AI landing pages included",
    competitor: "Typically requires external funnel tools",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "CRM & pipelines",
    aiBunty: "Built-in CRM with lifecycle automation",
    competitor: "Often handled with integrations",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "Workflow automation",
    aiBunty: "Visual workflows across channels",
    competitor: "Limited automation scope",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "WhatsApp API enablement",
    aiBunty: "Enabled during onboarding, included with subscription",
    competitor: "Available with plan-specific setup",
    aiBuntyHas: true,
    competitorHas: true,
  },
  {
    useCase: "Payments & revenue automation",
    aiBunty: "Payment gateways and automated handoffs",
    competitor: "Commonly handled externally",
    aiBuntyHas: true,
    competitorHas: false,
  },
];

export default function DcoreVsInterakt() {
  const path = "/dcore-vs-interakt";

  return (
    <>
      <Seo
        title="Dcore vs Interakt | Feature Comparison"
        description="See how Dcore compares on funnels, CRM, workflows, AI automation, ads, and payments."
        canonical={canonicalUrl(path)}
        jsonLd={[
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Dcore vs Interakt", path },
          ]),
        ]}
      />
      <Layout>
        <Section hero className="bg-gradient-hero">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Dcore vs Interakt
              </h1>
              <p className="text-sm md:text-base text-muted-foreground">
                A feature-led comparison highlighting Dcore's all-in-one scope
                across funnels, CRM, workflows, AI, ads, and payments.
              </p>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden mb-8">
              <ComparisonTable competitorName="Interakt" rows={comparisonData} />
            </div>

            <p className="text-xs md:text-sm text-muted-foreground text-center mb-6">
              Feature availability can vary by plan and integrations. This
              comparison focuses on platform scope.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              <Link className="text-primary underline" to="/dcore-vs-wati">
                Dcore vs WATI
              </Link>
              <Link className="text-primary underline" to="/dcore-vs-zoko">
                Dcore vs Zoko
              </Link>
              <Link className="text-primary underline" to="/dcore-vs-twilio-whatsapp">
                Dcore vs Twilio WhatsApp
              </Link>
            </div>
          </Container>
        </Section>

        <CTASection ctaText="Book Free Demo" />
      </Layout>
    </>
  );
}
