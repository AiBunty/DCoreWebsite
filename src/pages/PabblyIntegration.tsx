import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import SEO from "@/components/SEO";
import { buildBreadcrumbJsonLd, canonicalUrl } from "@/seo/seoUtils";

const path = "/pabbly-integration";

export default function PabblyIntegration() {
  return (
    <>
      <SEO
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
        <section className="py-16 md:py-24 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-wider text-primary/80 mb-4">
                Pabbly Integration
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Native Pabbly Integration
              </h1>
              <p className="text-xl text-muted-foreground">
                Connect Dcore to thousands of apps, sync leads instantly, and
                orchestrate automation across your stack.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                One Integration Hub
              </h2>
              <p className="text-muted-foreground mb-6">
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
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Combine with Webhooks
              </h2>
              <p className="text-muted-foreground mb-6">
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
          </div>
        </section>
      </Layout>
    </>
  );
}
