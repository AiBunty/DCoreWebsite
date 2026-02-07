import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CTASection } from "@/components/CTASection";
import SEO from "@/components/SEO";
import { buildBreadcrumbJsonLd, canonicalUrl } from "@/seo/seoUtils";

const comparisonData = [
  {
    useCase: "Omnichannel automation",
    aiBunty: "WhatsApp, email, SMS, and IVR in one platform",
    competitor: "Primarily WhatsApp-focused",
    aiBuntyHas: true,
    competitorHas: false,
  },
  {
    useCase: "Funnels & landing pages",
    aiBunty: "AI funnel builder and AI landing pages included",
    competitor: "Usually requires external tools",
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
      <SEO
        title="Dcore vs Zoko | Omnichannel Comparison"
        description="Compare omnichannel automation, WhatsApp API enablement, CRM, and workflows."
        canonical={canonicalUrl(path)}
        jsonLd={[
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Dcore vs Zoko", path },
          ]),
        ]}
      />
      <Layout>
        <section className="py-16 md:py-24 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Dcore vs Zoko
              </h1>
              <p className="text-xl text-muted-foreground">
                A neutral comparison of omnichannel scope and automation depth.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-card rounded-2xl shadow-soft border border-border overflow-hidden mb-10">
              <ComparisonTable competitorName="Zoko" rows={comparisonData} />
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
              <Link className="text-primary underline" to="/dcore-vs-twilio-whatsapp">
                Dcore vs Twilio WhatsApp
              </Link>
            </div>
          </div>
        </section>

        <CTASection ctaText="Book Free Demo" />
      </Layout>
    </>
  );
}
