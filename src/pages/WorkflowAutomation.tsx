import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import SEO from "@/components/SEO";
import { buildBreadcrumbJsonLd, buildFaqJsonLd, canonicalUrl } from "@/seo/seoUtils";

const path = "/workflow-automation";
const faqs = [
  {
    question: "Which channels can I automate?",
    answer:
      "Workflows support WhatsApp, email, SMS, IVR, CRM updates, and webhooks.",
  },
  {
    question: "Is WhatsApp messaging compliant?",
    answer:
      "Yes. Messaging is opt-in and template-based with WhatsApp Business API enabled during onboarding.",
  },
  {
    question: "Can I connect external tools?",
    answer:
      "Yes. Use webhooks and the native Pabbly integration to connect external apps.",
  },
];

export default function WorkflowAutomation() {
  return (
    <>
      <SEO
        title="Workflow Automation Software | Omnichannel | Dcore"
        description="Visual workflow automation across WhatsApp, email, SMS, IVR, webhooks, and CRM."
        canonical={canonicalUrl(path)}
        jsonLd={[
          buildFaqJsonLd(faqs),
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Workflow Automation", path },
          ]),
        ]}
      />
      <Layout>
        <section className="py-16 md:py-24 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-wider text-primary/80 mb-4">
                Workflow Automation
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Workflow Automation Software
              </h1>
              <p className="text-xl text-muted-foreground">
                Automate lead routing, follow-ups, and lifecycle actions across
                WhatsApp, email, SMS, IVR, and CRM.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Visual Triggers and Actions
              </h2>
              <p className="text-muted-foreground mb-6">
                Build workflow automations with visual triggers, delays, and
                conditional logic that keep your team aligned.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>Omnichannel automation across WhatsApp, Email, SMS, IVR</li>
                <li>CRM lifecycle triggers and team routing</li>
                <li>AI-assisted segmentation and personalization</li>
                <li>Analytics for workflow performance</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Extend with Webhooks and Pabbly
              </h2>
              <p className="text-muted-foreground mb-6">
                Connect external apps and real-time events using webhooks and
                Dcore's native Pabbly integration.
              </p>
              <div className="space-y-3">
                <Link className="text-primary underline" to="/webhook-integrations">
                  Webhook integrations
                </Link>
                <Link className="text-primary underline" to="/pabbly-integration">
                  Pabbly integration
                </Link>
                <Link className="text-primary underline" to="/crm-with-whatsapp-automation">
                  CRM with WhatsApp automation
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
