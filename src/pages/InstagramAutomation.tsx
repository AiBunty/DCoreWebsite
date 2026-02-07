import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import SEO from "@/components/SEO";
import { buildBreadcrumbJsonLd, canonicalUrl } from "@/seo/seoUtils";

const path = "/instagram-automation";

export default function InstagramAutomation() {
  return (
    <>
      <SEO
        title="Instagram DM & Comment Automation | Dcore"
        description="Automate DMs and comment replies, capture leads, and sync Instagram interactions to CRM and workflows."
        canonical={canonicalUrl(path)}
        jsonLd={[
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Instagram Automation", path },
          ]),
        ]}
      />
      <Layout>
        <section className="py-16 md:py-24 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-wider text-primary/80 mb-4">
                Instagram Automation
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Instagram DM & Comment Automation
              </h1>
              <p className="text-xl text-muted-foreground">
                Respond instantly to comments and DMs, capture leads, and route
                conversations into CRM pipelines.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Turn Engagement into Pipeline
              </h2>
              <p className="text-muted-foreground mb-6">
                Use keyword triggers and automated replies to qualify leads, send
                forms, and move contacts into the right CRM stage.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>Automated DM and comment workflows</li>
                <li>Lead capture with forms and landing pages</li>
                <li>CRM lifecycle tracking and segmentation</li>
                <li>Omnichannel follow-up via WhatsApp or email</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Connect to Omnichannel Journeys
              </h2>
              <p className="text-muted-foreground mb-6">
                Combine Instagram automation with WhatsApp, email, and SMS
                workflows to maintain consistent engagement across channels.
              </p>
              <div className="space-y-3">
                <Link className="text-primary underline" to="/crm-with-whatsapp-automation">
                  CRM with WhatsApp automation
                </Link>
                <Link className="text-primary underline" to="/workflow-automation">
                  Workflow automation
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
