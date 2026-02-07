import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/seo/Seo";
import { buildBreadcrumbJsonLd, canonicalUrl } from "@/seo/seoUtils";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const path = "/automation-funnels";

export default function AutomationFunnels() {
  return (
    <>
      <Seo
        title="Automation Funnels | VSL, Webinar, Lead | Dcore"
        description="Build conversion-focused VSL, webinar, and lead funnels with automation, payments, and CRM."
        canonical={canonicalUrl(path)}
        jsonLd={[
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Automation Funnels", path },
          ]),
        ]}
      />
      <Layout>
        <Section hero className="bg-gradient-hero">
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-wider text-primary/80 mb-4">
                Funnel Automation
              </p>
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Automation Funnels for Every Stage
              </h1>
              <p className="text-sm md:text-base text-muted-foreground">
                Launch VSL funnels, webinar funnels, and lead funnels with AI
                generation, payment routing, and CRM synchronization.
              </p>
            </div>
          </Container>
        </Section>

        <Section>
          <Container className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                Funnels Connected to Revenue
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Every funnel step can trigger WhatsApp, email, SMS, and IVR
                automation while payments update CRM in real time.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>AI-assisted funnel generation</li>
                <li>Form builder and landing page capture</li>
                <li>Payment gateway integrations</li>
                <li>CRM pipelines and lifecycle tracking</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                Recommended Integrations
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Keep your funnel stack unified across CRM, payments, and WhatsApp
                automation.
              </p>
              <div className="space-y-3">
                <Link className="text-primary underline" to="/payment-gateway-integrations">
                  Payment gateway integrations
                </Link>
                <Link className="text-primary underline" to="/crm-with-whatsapp-automation">
                  CRM with WhatsApp automation
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
