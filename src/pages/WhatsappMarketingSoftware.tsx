import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/seo/Seo";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildServiceJsonLd,
  canonicalUrl,
} from "@/seo/seoUtils";

const path = "/whatsapp-marketing-software";
const faqs = [
  {
    question: "Is WhatsApp Business API included?",
    answer:
      "Yes. Dcore is a WhatsApp Business API enabled platform, and API access is included with your subscription during onboarding.",
  },
  {
    question: "Can I send unsolicited or non-opt-in messages?",
    answer:
      "No. All messaging is opt-in and template-based to comply with WhatsApp policies.",
  },
  {
    question: "Does Dcore support CRM and workflow automation?",
    answer:
      "Yes. Dcore includes CRM, pipelines, and visual workflow automation across channels.",
  },
];

const WhatsappMarketingSoftware = () => (
  <>
    <Seo
      title="WhatsApp Marketing Software | API Included | Dcore"
      description="Run opt-in WhatsApp campaigns with official Business API enabled, CRM, workflows, and AI automation included."
      canonical={canonicalUrl(path)}
      jsonLd={[
        buildServiceJsonLd({
          name: "WhatsApp Automation Platform",
          serviceType: "WhatsApp Automation Platform",
          url: canonicalUrl(path),
          description:
            "Opt-in WhatsApp marketing software with API included, CRM workflows, and AI automation.",
        }),
        buildFaqJsonLd(faqs),
        buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "WhatsApp Marketing Software", path },
        ]),
      ]}
    />
    <Layout>
      <Section hero className="bg-gradient-hero">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-wider text-primary/80 mb-4">
              WhatsApp Automation Platform
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              WhatsApp Marketing Software
            </h1>
            <p className="text-sm md:text-base text-muted-foreground">
              Launch compliant WhatsApp journeys with CRM, workflows, AI
              chatbots, and analytics in one platform. WhatsApp Business API is
              enabled during onboarding and included with subscription.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
              Built for Opt-In, Template-Based Messaging
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mb-4">
              Dcore supports official templates, audience segmentation, and
              lifecycle triggers so every WhatsApp message stays compliant.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>WhatsApp Business API enabled with onboarding support</li>
              <li>Template approvals and opt-in governance</li>
              <li>CRM context for personalized automation</li>
              <li>Omnichannel workflows with email, SMS, and IVR</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
              Connect Funnels, Forms, and AI
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mb-4">
              Pair WhatsApp marketing with AI funnels, AI landing pages, and
              form builders to capture and convert leads faster.
            </p>
            <div className="space-y-3">
              <Link className="text-primary underline" to="/whatsapp-sender-software">
                WhatsApp sender software
              </Link>
              <Link className="text-primary underline" to="/whatsapp-business-api-included">
                WhatsApp Business API included
              </Link>
              <Link className="text-primary underline" to="/ai-funnel-builder">
                AI funnel builder
              </Link>
              <Link className="text-primary underline" to="/ai-chatbots-whatsapp">
                AI chatbots for WhatsApp
              </Link>
              <Link className="text-primary underline" to="/crm-with-whatsapp-automation">
                CRM with WhatsApp automation
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

export default WhatsappMarketingSoftware;
