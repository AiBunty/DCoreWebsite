import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/seo/Seo";
import { buildBreadcrumbJsonLd, canonicalUrl } from "@/seo/seoUtils";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const path = "/webhook-integrations";

export default function WebhookIntegrations() {
  return (
    <>
      <Seo
        title="Webhook Integrations | Real-Time Automation | Dcore"
        description="Send and receive webhooks to automate lead routing, CRM updates, and omnichannel messaging."
        canonical={canonicalUrl(path)}
        jsonLd={[
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Webhook Integrations", path },
          ]),
        ]}
      />
      <Layout>
        <Section hero className="bg-gradient-hero">
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-wider text-primary/80 mb-4">
                Webhook Integrations
              </p>
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Webhook Integrations for Real-Time Automation
              </h1>
              <p className="text-sm md:text-base text-muted-foreground">
                Push and receive real-time events to synchronize CRM updates,
                workflow automation, and omnichannel messaging.
              </p>
            </div>
          </Container>
        </Section>

        <Section>
          <Container className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                Built for Event-Driven Marketing
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Use webhooks to trigger WhatsApp, email, SMS, or IVR workflows
                the moment a lead takes action.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>Inbound and outbound webhook support</li>
                <li>CRM pipeline updates in real time</li>
                <li>Workflow automation triggers</li>
                <li>Secure payload handling and logging</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                Extend with Pabbly Integrations
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Combine webhooks with Pabbly connectors to sync Dcore with your
                broader tech stack.
              </p>
              <div className="space-y-3">
                <Link className="text-primary underline" to="/pabbly-integration">
                  Pabbly integration
                </Link>
                <Link className="text-primary underline" to="/workflow-automation">
                  Workflow automation
                </Link>
                <Link className="text-primary underline" to="/crm-with-whatsapp-automation">
                  CRM with WhatsApp automation
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </Layout>
    </>
  );
}
