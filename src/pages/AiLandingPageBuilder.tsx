import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/seo/Seo";
import { buildBreadcrumbJsonLd, canonicalUrl } from "@/seo/seoUtils";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const path = "/ai-landing-page-builder";

export default function AiLandingPageBuilder() {
  return (
    <>
      <Seo
        title="AI Landing Page Builder | High-Converting Pages | Dcore"
        description="Create AI-powered landing pages with forms, payments, and CRM-ready lead capture."
        canonical={canonicalUrl(path)}
        jsonLd={[
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "AI Landing Page Builder", path },
          ]),
        ]}
      />
      <Layout>
        <Section hero className="bg-gradient-hero">
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-wider text-primary/80 mb-4">
                AI Landing Page Builder
              </p>
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                AI Landing Page Builder for Faster Launches
              </h1>
              <p className="text-sm md:text-base text-muted-foreground">
                Generate high-converting landing pages with AI, capture leads,
                and trigger CRM workflows instantly.
              </p>
            </div>
          </Container>
        </Section>

        <Section>
          <Container className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                Pages That Feed Your Funnel
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Every AI landing page connects to forms, CRM, and automation
                flows so you can move leads from capture to conversion.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>AI-generated layouts and copy guidance</li>
                <li>Embedded forms and lead routing</li>
                <li>CRM and workflow automation triggers</li>
                <li>Payments and checkout integrations</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                Pair with Funnels and WhatsApp
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Combine AI landing pages with AI funnels and WhatsApp automation
                for complete omnichannel journeys.
              </p>
              <div className="space-y-3">
                <Link className="text-primary underline" to="/ai-funnel-builder">
                  AI funnel builder
                </Link>
                <Link className="text-primary underline" to="/whatsapp-marketing-software">
                  WhatsApp marketing software
                </Link>
                <Link className="text-primary underline" to="/payment-gateway-integrations">
                  Payment gateway integrations
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </Layout>
    </>
  );
}
