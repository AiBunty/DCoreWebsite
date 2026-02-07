import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import SEO from "@/components/SEO";
import { buildBreadcrumbJsonLd, canonicalUrl } from "@/seo/seoUtils";

const path = "/automation-funnels";

export default function AutomationFunnels() {
  return (
    <>
      <SEO
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
        <section className="py-16 md:py-24 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-wider text-primary/80 mb-4">
                Funnel Automation
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Automation Funnels for Every Stage
              </h1>
              <p className="text-xl text-muted-foreground">
                Launch VSL funnels, webinar funnels, and lead funnels with AI
                generation, payment routing, and CRM synchronization.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Funnels Connected to Revenue
              </h2>
              <p className="text-muted-foreground mb-6">
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
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Recommended Integrations
              </h2>
              <p className="text-muted-foreground mb-6">
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
          </div>
        </section>
      </Layout>
    </>
  );
}
