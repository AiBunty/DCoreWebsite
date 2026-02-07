import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/seo/Seo";
import { buildBreadcrumbJsonLd, canonicalUrl } from "@/seo/seoUtils";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const path = "/ai-chatbots-whatsapp";

export default function AiChatbotsWhatsapp() {
  return (
    <>
      <Seo
        title="AI Chatbots for WhatsApp | Dcore Systems"
        description="Deploy AI chatbots on WhatsApp with opt-in flows, CRM context, and workflow triggers."
        canonical={canonicalUrl(path)}
        jsonLd={[
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "AI Chatbots for WhatsApp", path },
          ]),
        ]}
      />
      <Layout>
        <Section hero className="bg-gradient-hero">
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-wider text-primary/80 mb-4">
                AI Chatbots for WhatsApp
              </p>
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                AI Chatbots with WhatsApp Integration
              </h1>
              <p className="text-sm md:text-base text-muted-foreground">
                Handle FAQs, qualify leads, and trigger automated journeys with
                AI chatbots connected to WhatsApp and your CRM.
              </p>
            </div>
          </Container>
        </Section>

        <Section>
          <Container className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                Context-Aware Conversations
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                AI chatbots use CRM data and automation triggers to deliver
                personalized responses and route conversations to sales teams.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>WhatsApp Business API enabled onboarding</li>
                <li>Opt-in, template-based messaging compliance</li>
                <li>CRM lifecycle tracking and lead scoring</li>
                <li>Visual workflow automation triggers</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                Tie Chatbots to Funnels
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Use AI chatbots to move leads into AI funnels, landing pages,
                and payments.
              </p>
              <div className="space-y-3">
                <Link className="text-primary underline" to="/ai-funnel-builder">
                  AI funnel builder
                </Link>
                <Link className="text-primary underline" to="/crm-with-whatsapp-automation">
                  CRM with WhatsApp automation
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
