import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/seo/Seo";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  canonicalUrl,
} from "@/seo/seoUtils";

const path = "/whatsapp-sender-software";
const faqs = [
  {
    question: "Is WhatsApp Business API required?",
    answer:
      "Yes. Dcore enables WhatsApp Business API during onboarding, and access is included with your subscription.",
  },
  {
    question: "Can I send unsolicited or non-opt-in messages?",
    answer:
      "No. Dcore supports opt-in, template-based messaging that aligns with WhatsApp policies.",
  },
  {
    question: "Does it connect with CRM and workflows?",
    answer:
      "Yes. Sender campaigns can trigger CRM updates, workflow automations, and omnichannel follow-ups.",
  },
];

export default function WhatsappSenderSoftware() {
  return (
    <>
      <Seo
        title="WhatsApp Sender Software | Opt-In Automation | Dcore"
        description="Send approved templates at scale with WhatsApp Business API enabled, targeting, and compliant automation."
        canonical={canonicalUrl(path)}
        jsonLd={[
          buildFaqJsonLd(faqs),
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "WhatsApp Sender Software", path },
          ]),
        ]}
      />
      <Layout>
        <Section hero className="bg-gradient-hero">
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-wider text-primary/80 mb-4">
                WhatsApp Sender Software
              </p>
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Compliant WhatsApp Sender Automation
              </h1>
              <p className="text-sm md:text-base text-muted-foreground">
                Deliver approved WhatsApp templates to opted-in audiences with
                segmentation, CRM context, and automation workflows.
              </p>
            </div>
          </Container>
        </Section>

        <Section>
          <Container className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                Built for Scale and Compliance
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Dcore manages templates, approvals, and opt-in governance while
                keeping campaigns aligned with WhatsApp policies.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>WhatsApp Business API enabled with onboarding support</li>
                <li>Template-based messaging with audit-friendly logs</li>
                <li>Audience segmentation and lifecycle targeting</li>
                <li>Real-time analytics and delivery visibility</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                Connect with CRM and Workflows
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Coordinate WhatsApp sender campaigns with CRM stages, email, SMS,
                and IVR automation.
              </p>
              <div className="space-y-3">
                <Link className="text-primary underline" to="/whatsapp-marketing-software">
                  WhatsApp marketing software
                </Link>
                <Link className="text-primary underline" to="/whatsapp-business-api-included">
                  WhatsApp Business API included
                </Link>
                <Link className="text-primary underline" to="/crm-with-whatsapp-automation">
                  CRM with WhatsApp automation
                </Link>
                <Link className="text-primary underline" to="/workflow-automation">
                  Workflow automation
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
