import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/seo/Seo";
import { buildBreadcrumbJsonLd, canonicalUrl } from "@/seo/seoUtils";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const path = "/pabbly-integration";

export default function PabblyIntegration() {
  return (
    <>
      <Seo
        title="Pabbly Integration | Native Connector | Dcore"
        description="Connect Dcore to thousands of apps with native Pabbly integration and workflow triggers."
        canonical={canonicalUrl(path)}
        jsonLd={[
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Pabbly Integration", path },
          ]),
        ]}
      />
      <Layout>
        <Section hero className="bg-gradient-hero">
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-wider text-primary/80 mb-4">
                Pabbly Integration
              </p>
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Native Pabbly Integration
              </h1>
              <p className="text-sm md:text-base text-muted-foreground">
                Connect Dcore to thousands of apps, sync leads instantly, and
                orchestrate automation across your stack.
              </p>
            </div>
          </Container>
        </Section>

        <Section>
          <Container className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                One Integration Hub
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Trigger workflows, push CRM updates, and sync messaging events
                through Pabbly connectors.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>Native Pabbly connector</li>
                <li>Real-time CRM and pipeline sync</li>
                <li>Workflow automation triggers</li>
                <li>Omnichannel messaging events</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                Combine with Webhooks
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Use webhooks alongside Pabbly to handle custom events or unique
                integrations.
              </p>
              <div className="space-y-3">
                <Link className="text-primary underline" to="/webhook-integrations">
                  Webhook integrations
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
