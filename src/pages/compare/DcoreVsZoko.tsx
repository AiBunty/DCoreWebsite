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
    useCase: "WhatsApp enablement",
    aiBunty: "API enabled during onboarding, included with subscription",
    competitor: "API access with plan-specific setup",
    aiBuntyHas: true,
    competitorHas: true,
  },
  {
    useCase: "Funnels & landing pages",
    aiBunty: "AI funnel builder and AI landing pages included",
    competitor: "Requires separate funnel tools",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "CRM & lifecycle tracking",
    aiBunty: "Built-in CRM with pipelines",
    competitor: "Often handled via integrations",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "Workflow automation",
    aiBunty: "Visual workflows with triggers",
    competitor: "Limited automation scope",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "Payments & revenue ops",
    aiBunty: "Payment gateways and automated follow-ups",
    competitor: "Commonly external",
    aiBuntyHas: true,
    competitorHas: false,
  },
];

export default function DcoreVsZoko() {
  const path = "/dcore-vs-zoko";

  return (
    <>
      <Seo
        title="Dcore vs Zoko | WhatsApp Automation Comparison"
        description="Compare WhatsApp automation scope, CRM, workflows, AI funnels, and payments."
        canonical={canonicalUrl(path)}
        jsonLd={[
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Dcore vs Zoko", path },
          ]),
        ]}
      />
      <Layout>
        <Section hero className="bg-gradient-hero">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Dcore vs Zoko
              </h1>
              <p className="text-sm md:text-base text-muted-foreground">
                A neutral comparison of platform scope for automation-first teams.
              </p>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden mb-8">
              <ComparisonTable competitorName="Zoko" rows={comparisonData} />
            </div>

            <p className="text-xs md:text-sm text-muted-foreground text-center mb-6">
              Feature availability can vary by plan and integrations. This comparison focuses on platform scope.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              <Link className="text-primary underline" to="/dcore-vs-wati">
                Dcore vs WATI
              </Link>
              <Link className="text-primary underline" to="/dcore-vs-interakt">
                Dcore vs Interakt
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
