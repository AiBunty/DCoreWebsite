import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/seo/Seo";
import {
  buildBreadcrumbJsonLd,
  buildServiceJsonLd,
  canonicalUrl,
} from "@/seo/seoUtils";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const path = "/ai-funnel-builder";

export default function AiFunnelBuilder() {
  return (
    <>
      <Seo
        title="AI Funnel Builder | Auto-Generated Funnels | Dcore"
        description="Generate funnels with AI, launch pages fast, and connect WhatsApp, email, and payments."
        canonical={canonicalUrl(path)}
        jsonLd={[
          buildServiceJsonLd({
            name: "AI Funnel Builder",
            serviceType: "AI Funnel Builder",
            url: canonicalUrl(path),
            description:
              "AI-driven funnel generation with CRM, automation, and payment integrations.",
          }),
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "AI Funnel Builder", path },
          ]),
        ]}
      />
      <Layout>
        <Section hero className="bg-gradient-hero">
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-wider text-primary/80 mb-4">
                AI Funnel Builder
              </p>
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                AI-Generated Funnels That Convert
              </h1>
              <p className="text-sm md:text-base text-muted-foreground">
                Build VSL, webinar, and lead funnels in minutes with AI. Connect
                CRM, WhatsApp automation, and payments without extra tools.
              </p>
            </div>
          </Container>
        </Section>

        <Section>
          <Container className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                From Idea to Live Funnel Faster
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                AI auto-funnel generation helps you launch landing pages, forms,
                and follow-up sequences aligned to your offer.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>AI funnel builder and AI landing page builder</li>
                <li>Integrated form builder and lead routing</li>
                <li>CRM pipelines with lifecycle tracking</li>
                <li>Automated WhatsApp, email, and SMS follow-up</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                Connect Payments and Ads
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Tie every funnel stage to payment gateways and ad campaigns for a
                complete revenue system.
              </p>
              <div className="space-y-3">
                <Link className="text-primary underline" to="/payment-gateway-integrations">
                  Payment gateway integrations
                </Link>
                <Link className="text-primary underline" to="/automation-funnels">
                  Automation funnels
                </Link>
                <Link className="text-primary underline" to="/whatsapp-marketing-software">
                  WhatsApp marketing software
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </Layout>
    </>
  );
}
