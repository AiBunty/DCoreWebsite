import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import SEO from "@/components/SEO";
import { buildBreadcrumbJsonLd, canonicalUrl } from "@/seo/seoUtils";

const path = "/ai-chatbots-whatsapp";

export default function AiChatbotsWhatsapp() {
  return (
    <>
      <SEO
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
        <section className="py-16 md:py-24 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-wider text-primary/80 mb-4">
                AI Chatbots for WhatsApp
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                AI Chatbots with WhatsApp Integration
              </h1>
              <p className="text-xl text-muted-foreground">
                Handle FAQs, qualify leads, and trigger automated journeys with
                AI chatbots connected to WhatsApp and your CRM.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Context-Aware Conversations
              </h2>
              <p className="text-muted-foreground mb-6">
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
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Tie Chatbots to Funnels
              </h2>
              <p className="text-muted-foreground mb-6">
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
          </div>
        </section>
      </Layout>
    </>
  );
}
