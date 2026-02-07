import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import SEO from "@/components/SEO";
import { buildBreadcrumbJsonLd, canonicalUrl } from "@/seo/seoUtils";

const path = "/form-builder";

export default function FormBuilder() {
  return (
    <>
      <SEO
        title="Form Builder | Lead Capture to CRM | Dcore"
        description="Create embedded forms that route leads into CRM and trigger WhatsApp and email automations."
        canonical={canonicalUrl(path)}
        jsonLd={[
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Form Builder", path },
          ]),
        ]}
      />
      <Layout>
        <section className="py-16 md:py-24 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-wider text-primary/80 mb-4">
                Form Builder
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Form Builder for Instant Lead Capture
              </h1>
              <p className="text-xl text-muted-foreground">
                Capture leads with embedded forms and automatically route them
                into CRM pipelines and workflows.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Forms Connected to Automation
              </h2>
              <p className="text-muted-foreground mb-6">
                Every submission can trigger WhatsApp, email, and SMS journeys
                while updating CRM pipelines automatically.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>Custom fields and conditional logic</li>
                <li>Instant CRM capture and lifecycle updates</li>
                <li>Workflow triggers and lead scoring</li>
                <li>Opt-in messaging governance</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Use Forms Across Funnels and WhatsApp
              </h2>
              <p className="text-muted-foreground mb-6">
                Embed forms in AI landing pages and automation funnels to boost
                conversion.
              </p>
              <div className="space-y-3">
                <Link className="text-primary underline" to="/ai-landing-page-builder">
                  AI landing page builder
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
