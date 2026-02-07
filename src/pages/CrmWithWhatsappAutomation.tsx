import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/seo/Seo";
import { buildBreadcrumbJsonLd, buildFaqJsonLd, buildServiceJsonLd, canonicalUrl } from "@/seo/seoUtils";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const path = "/crm-with-whatsapp-automation";
const faqs = [
  {
    question: "Does Dcore include a CRM?",
    answer:
      "Yes. Dcore includes a built-in CRM with pipelines, lifecycle tracking, and WhatsApp automation.",
  },
  {
    question: "Can I automate WhatsApp messaging from CRM?",
    answer:
      "Yes. Workflow automation can trigger WhatsApp, email, SMS, and IVR messaging from CRM events.",
  },
  {
    question: "Is messaging compliant?",
    answer:
      "All messaging is opt-in and template-based, aligned with WhatsApp policies.",
  },
];

export default function CrmWithWhatsappAutomation() {
  return (
    <>
      <Seo
        title="CRM with WhatsApp Automation | Dcore Systems"
        description="Track leads, pipelines, and lifecycle stages. Trigger compliant WhatsApp, email, SMS, and IVR workflows."
        canonical={canonicalUrl(path)}
        jsonLd={[
          buildServiceJsonLd({
            name: "CRM & Workflow Automation",
            serviceType: "CRM & Workflow Automation",
            url: canonicalUrl(path),
            description:
              "CRM with WhatsApp automation, pipelines, lifecycle tracking, and omnichannel workflows.",
          }),
          buildFaqJsonLd(faqs),
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "CRM with WhatsApp Automation", path },
          ]),
        ]}
      />
      <Layout>
        <Section hero className="bg-gradient-hero">
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-wider text-primary/80 mb-4">
                CRM with WhatsApp Automation
              </p>
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                CRM with WhatsApp Automation
              </h1>
              <p className="text-sm md:text-base text-muted-foreground">
                Track every lead, automate follow-ups, and connect omnichannel
                workflows from a unified CRM platform.
              </p>
            </div>
          </Container>
        </Section>

        <Section>
          <Container className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                Pipelines, Lifecycle, and Ownership
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Dcore CRM provides pipelines, lifecycle stages, and team
                assignment so sales and marketing stay aligned.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>Unified lead, deal, and lifecycle tracking</li>
                <li>WhatsApp automation tied to CRM events</li>
                <li>Omnichannel workflows across email, SMS, and IVR</li>
                <li>AI-assisted segmentation and routing</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                Automation Chain: CRM → Workflows → Webhooks → Pabbly
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Trigger workflows from CRM updates, push events via webhooks,
                and connect with Pabbly for external apps.
              </p>
              <div className="space-y-3">
                <Link className="text-primary underline" to="/whatsapp-marketing-software">
                  WhatsApp marketing software
                </Link>
                <Link className="text-primary underline" to="/workflow-automation">
                  Workflow automation
                </Link>
                <Link className="text-primary underline" to="/webhook-integrations">
                  Webhook integrations
                </Link>
                <Link className="text-primary underline" to="/pabbly-integration">
                  Pabbly integration
                </Link>
              </div>
            </div>
          </Container>
        </Section>

        <Section muted>
          <Container className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
              Frequently Asked Questions
            </h2>
            <dl className="space-y-6 text-muted-foreground">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="font-semibold text-foreground">{faq.question}</dt>
                  <dd>{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </Section>
      </Layout>
    </>
  );
}
