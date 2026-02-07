import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import SEO from "@/components/SEO";
import {
  buildBreadcrumbJsonLd,
  buildServiceJsonLd,
  canonicalUrl,
} from "@/seo/seoUtils";

const path = "/ai-funnel-builder";

export default function AiFunnelBuilder() {
  return (
    <>
      <SEO
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
        <section className="py-16 md:py-24 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-wider text-primary/80 mb-4">
                AI Funnel Builder
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                AI-Generated Funnels That Convert
              </h1>
              <p className="text-xl text-muted-foreground">
                Build VSL, webinar, and lead funnels in minutes with AI. Connect
                CRM, WhatsApp automation, and payments without extra tools.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                From Idea to Live Funnel Faster
              </h2>
              <p className="text-muted-foreground mb-6">
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
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Connect Payments and Ads
              </h2>
              <p className="text-muted-foreground mb-6">
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
          </div>
        </section>
      </Layout>
    </>
  );
}
