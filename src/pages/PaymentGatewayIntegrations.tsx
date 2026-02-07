import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import SEO from "@/components/SEO";
import { buildBreadcrumbJsonLd, canonicalUrl } from "@/seo/seoUtils";

const path = "/payment-gateway-integrations";

export default function PaymentGatewayIntegrations() {
  return (
    <>
      <SEO
        title="Payment Gateway Integrations | Razorpay & More"
        description="Accept payments with Razorpay, Instamojo, and more. Automate invoices, access, and CRM updates from every transaction."
        canonical={canonicalUrl(path)}
        jsonLd={[
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Payment Gateway Integrations", path },
          ]),
        ]}
      />
      <Layout>
        <section className="py-16 md:py-24 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-wider text-primary/80 mb-4">
                Payments & Revenue Automation
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Payment Gateway Integrations
              </h1>
              <p className="text-xl text-muted-foreground">
                Connect Razorpay, Instamojo, and other gateways to Dcore so
                every payment updates CRM, triggers workflows, and unlocks
                instant access.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Automate the Revenue Lifecycle
              </h2>
              <p className="text-muted-foreground mb-6">
                Sync payments with CRM pipelines, send confirmations on WhatsApp
                and email, and trigger upsell sequences from a single workflow
                automation hub.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>Razorpay, Instamojo, and flexible payment options</li>
                <li>Auto-generated invoices and receipts</li>
                <li>Workflow triggers for access and fulfillment</li>
                <li>Unified payment analytics inside CRM</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Built for Funnels and Omnichannel Journeys
              </h2>
              <p className="text-muted-foreground mb-6">
                Connect AI funnels, AI landing pages, and form builders to
                payment gateways without extra tools. Every transaction can
                trigger WhatsApp, email, SMS, or IVR follow-ups.
              </p>
              <div className="space-y-3">
                <Link className="text-primary underline" to="/automation-funnels">
                  Automation funnels and payments
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

        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Compliance and Trust
            </h2>
            <p className="text-muted-foreground">
              All payment notifications follow opt-in messaging rules. WhatsApp
              Business API is enabled during onboarding and included with the
              Dcore subscription, not sold separately.
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
}
