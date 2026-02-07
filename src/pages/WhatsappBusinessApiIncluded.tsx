import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import SEO from "@/components/SEO";
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  canonicalUrl,
} from "@/seo/seoUtils";

const path = "/whatsapp-business-api-included";
const faqs = [
  {
    question: "Is the WhatsApp Business API sold separately?",
    answer:
      "No. Dcore enables WhatsApp Business API during onboarding and includes API access with the subscription.",
  },
  {
    question: "How long does API enablement take?",
    answer:
      "Timelines depend on verification requirements, but Dcore guides you through each step during onboarding.",
  },
  {
    question: "Is messaging compliant by default?",
    answer:
      "Yes. Dcore enforces opt-in, template-based messaging to align with WhatsApp policies.",
  },
];

export default function WhatsappBusinessApiIncluded() {
  return (
    <>
      <SEO
        title="WhatsApp Business API Included | Dcore Systems"
        description="Get WhatsApp Business API enabled during onboarding. API access is included with subscription, not sold separately."
        canonical={canonicalUrl(path)}
        jsonLd={[
          buildFaqJsonLd(faqs),
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "WhatsApp Business API Included", path },
          ]),
        ]}
      />
      <Layout>
        <section className="py-16 md:py-24 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-wider text-primary/80 mb-4">
                WhatsApp Business API Enablement
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                WhatsApp Business API Included
              </h1>
              <p className="text-xl text-muted-foreground">
                Dcore Systems provides WhatsApp Business API enablement during
                subscription onboarding. API access is included with Dcore
                plans and is not sold separately.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Official Enablement with Compliance
              </h2>
              <p className="text-muted-foreground mb-6">
                Our onboarding team helps with verification, template setup,
                and compliance rules so you can launch WhatsApp journeys
                confidently.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>API included with subscription</li>
                <li>Template-based, opt-in messaging</li>
                <li>Guided onboarding and verification support</li>
                <li>CRM and workflow automation connected</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Connect WhatsApp to Your Entire Stack
              </h2>
              <p className="text-muted-foreground mb-6">
                Use WhatsApp automation alongside AI funnels, landing pages,
                CRM pipelines, and omnichannel workflows.
              </p>
              <div className="space-y-3">
                <Link className="text-primary underline" to="/whatsapp-marketing-software">
                  WhatsApp marketing software
                </Link>
                <Link className="text-primary underline" to="/whatsapp-sender-software">
                  WhatsApp sender software
                </Link>
                <Link className="text-primary underline" to="/crm-with-whatsapp-automation">
                  CRM with WhatsApp automation
                </Link>
                <Link className="text-primary underline" to="/workflow-automation">
                  Workflow automation
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
