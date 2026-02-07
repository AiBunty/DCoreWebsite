import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import SEO from "@/components/SEO";
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildServiceJsonLd,
  canonicalUrl,
} from "@/seo/seoUtils";

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
      <SEO
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
        <section className="py-16 md:py-24 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-wider text-primary/80 mb-4">
                CRM with WhatsApp Automation
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                CRM with WhatsApp Automation
              </h1>
              <p className="text-xl text-muted-foreground">
                Track every lead, automate follow-ups, and connect omnichannel
                workflows from a unified CRM platform.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Pipelines, Lifecycle, and Ownership
              </h2>
              <p className="text-muted-foreground mb-6">
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
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Automation Chain: CRM → Workflows → Webhooks → Pabbly
              </h2>
              <p className="text-muted-foreground mb-6">
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
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
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
          </div>
        </section>
      </Layout>
    </>
  );
}
