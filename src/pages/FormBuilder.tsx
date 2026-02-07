import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/seo/Seo";
import { buildBreadcrumbJsonLd, canonicalUrl } from "@/seo/seoUtils";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const path = "/form-builder";

export default function FormBuilder() {
  return (
    <>
      <Seo
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
        <Section hero className="bg-gradient-hero">
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-wider text-primary/80 mb-4">
                Form Builder
              </p>
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Form Builder for Instant Lead Capture
              </h1>
              <p className="text-sm md:text-base text-muted-foreground">
                Capture leads with embedded forms and automatically route them
                into CRM pipelines and workflows.
              </p>
            </div>
          </Container>
        </Section>

        <Section>
          <Container className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                Forms Connected to Automation
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
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
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                Use Forms Across Funnels and WhatsApp
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
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
          </Container>
        </Section>
      </Layout>
    </>
  );
}
