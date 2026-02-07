import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import SEO from "@/components/SEO";
import { buildBreadcrumbJsonLd, canonicalUrl } from "@/seo/seoUtils";

const path = "/webhook-integrations";

export default function WebhookIntegrations() {
  return (
    <>
      <SEO
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
        <section className="py-16 md:py-24 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-wider text-primary/80 mb-4">
                Webhook Integrations
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Webhook Integrations for Real-Time Automation
              </h1>
              <p className="text-xl text-muted-foreground">
                Push and receive real-time events to synchronize CRM updates,
                workflow automation, and omnichannel messaging.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Built for Event-Driven Marketing
              </h2>
              <p className="text-muted-foreground mb-6">
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
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Extend with Pabbly Integrations
              </h2>
              <p className="text-muted-foreground mb-6">
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
          </div>
        </section>
      </Layout>
    </>
  );
}
