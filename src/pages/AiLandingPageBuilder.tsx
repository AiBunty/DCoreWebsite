import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import SEO from "@/components/SEO";
import { buildBreadcrumbJsonLd, canonicalUrl } from "@/seo/seoUtils";

const path = "/ai-landing-page-builder";

export default function AiLandingPageBuilder() {
  return (
    <>
      <SEO
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
        <section className="py-16 md:py-24 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-wider text-primary/80 mb-4">
                AI Landing Page Builder
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                AI Landing Page Builder for Faster Launches
              </h1>
              <p className="text-xl text-muted-foreground">
                Generate high-converting landing pages with AI, capture leads,
                and trigger CRM workflows instantly.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Pages That Feed Your Funnel
              </h2>
              <p className="text-muted-foreground mb-6">
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
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Pair with Funnels and WhatsApp
              </h2>
              <p className="text-muted-foreground mb-6">
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
          </div>
        </section>
      </Layout>
    </>
  );
}
