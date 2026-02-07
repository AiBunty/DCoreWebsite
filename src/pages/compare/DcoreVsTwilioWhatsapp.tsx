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
    competitor: "API access with developer-led setup",
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
    aiBunty: "Built-in CRM and pipelines",
    competitor: "CRM handled externally",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "Workflow automation",
    aiBunty: "Visual workflows across channels",
    competitor: "Usually via additional tooling",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "Payments & revenue ops",
    aiBunty: "Payment gateways with automation",
    competitor: "External payments stack",
    aiBuntyHas: true,
    competitorHas: false,
  },
];

export default function DcoreVsTwilioWhatsapp() {
  const path = "/dcore-vs-twilio-whatsapp";

  return (
    <>
      <Seo
        title="Dcore vs Twilio WhatsApp | Platform Comparison"
        description="Compare WhatsApp-only APIs with Dcore's full automation OS: funnels, CRM, workflows, AI, ads, and payments."
        canonical={canonicalUrl(path)}
        jsonLd={[
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Dcore vs Twilio WhatsApp", path },
          ]),
        ]}
      />
      <Layout>
        <Section hero className="bg-gradient-hero">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Dcore vs Twilio WhatsApp
              </h1>
              <p className="text-sm md:text-base text-muted-foreground">
                A neutral comparison of platform scope for WhatsApp-centric automation and growth workflows.
              </p>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden mb-8">
              <ComparisonTable competitorName="Twilio WhatsApp" rows={comparisonData} />
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
              <Link className="text-primary underline" to="/dcore-vs-zoko">
                Dcore vs Zoko
              </Link>
            </div>
          </Container>
        </Section>

        <CTASection ctaText="Book Free Demo" />
      </Layout>
    </>
  );
}
