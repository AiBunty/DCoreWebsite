import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CTASection } from "@/components/CTASection";
import SEO from "@/components/SEO";
import { buildBreadcrumbJsonLd, canonicalUrl } from "@/seo/seoUtils";

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
      <SEO
        title="Dcore vs Twilio WhatsApp | Platform Comparison"
        description="Compare WhatsApp enablement, CRM, automation, and funnel building in a neutral view."
        canonical={canonicalUrl(path)}
        jsonLd={[
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Dcore vs Twilio WhatsApp", path },
          ]),
        ]}
      />
      <Layout>
        <section className="py-16 md:py-24 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Dcore vs Twilio WhatsApp
              </h1>
              <p className="text-xl text-muted-foreground">
                A neutral comparison of platform scope for WhatsApp-centric
                automation and growth workflows.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-card rounded-2xl shadow-soft border border-border overflow-hidden mb-10">
              <ComparisonTable competitorName="Twilio WhatsApp" rows={comparisonData} />
            </div>

            <p className="text-sm text-muted-foreground text-center mb-8">
              Feature availability can vary by plan and integrations. This
              comparison focuses on platform scope.
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
          </div>
        </section>

        <CTASection ctaText="Book Free Demo" />
      </Layout>
    </>
  );
}
