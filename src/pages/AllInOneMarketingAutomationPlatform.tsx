import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import SEO from "@/components/SEO";
import { canonicalUrl, buildBreadcrumbJsonLd } from "@/seo/seoUtils";

const path = "/all-in-one-marketing-automation-platform";

const AllInOneMarketingAutomationPlatform = () => (
  <>
    <SEO
      title="All-in-One Marketing Automation Platform | Dcore"
      description="AI-powered omnichannel automation with WhatsApp, CRM, funnels, workflows, ads, and payments in one platform."
      canonical={canonicalUrl(path)}
      jsonLd={[
        buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "All-in-One Marketing Automation Platform", path },
        ]),
      ]}
    />
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wider text-primary/80 mb-4">
              Omnichannel Marketing Automation Platform
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              All-in-One Marketing Automation Platform
            </h1>
            <p className="text-xl text-muted-foreground">
              Dcore Systems unifies WhatsApp marketing software, CRM with
              WhatsApp automation, AI funnel builder, workflow automation
              software, AI landing page builder, and payments into a single
              enterprise-ready platform.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Omnichannel Automation, One Control Plane
              </h2>
              <p className="text-muted-foreground mb-6">
                Orchestrate WhatsApp, Email, SMS, and IVR journeys with
                centralized CRM, pipelines, and lifecycle tracking. Dcore keeps
                your customer data, messaging compliance, and performance
                analytics in one place.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>WhatsApp Business API enabled during onboarding</li>
                <li>Opt-in, template-based messaging and approvals</li>
                <li>Unified CRM, pipelines, and lifecycle stages</li>
                <li>Webhook automation and native Pabbly integration</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                AI-Powered Funnels, Pages, and Chatbots
              </h2>
              <p className="text-muted-foreground mb-6">
                Launch AI-generated VSL funnels, webinar funnels, and lead
                funnels faster. Create AI landing pages, connect AI chatbots to
                WhatsApp, and trigger workflows instantly from every touchpoint.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>AI funnel builder with auto-funnel generation</li>
                <li>AI landing page builder with form capture</li>
                <li>AI chatbots for WhatsApp and web journeys</li>
                <li>Ad launcher for Meta, Google, and LinkedIn</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Core Capabilities Across Clusters
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-muted-foreground">
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                WhatsApp Automation
              </h3>
              <p>
                WhatsApp sender software with official WhatsApp Business API
                enabled, compliant templates, and opt-in broadcasting.
              </p>
              <Link className="text-primary underline" to="/whatsapp-marketing-software">
                Explore WhatsApp marketing
              </Link>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Funnels & Landing Pages
              </h3>
              <p>
                AI funnel builder, automation funnels, and AI landing page
                builder optimized for conversion.
              </p>
              <Link className="text-primary underline" to="/ai-funnel-builder">
                See AI funnel builder
              </Link>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                CRM & Workflow Automation
              </h3>
              <p>
                CRM with WhatsApp automation, workflow automation software, and
                visual triggers for every lifecycle stage.
              </p>
              <Link className="text-primary underline" to="/crm-with-whatsapp-automation">
                View CRM automation
              </Link>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Integrations & Webhooks
              </h3>
              <p>
                Webhook automation, native Pabbly integration, and app
                connections to sync leads and events in real time.
              </p>
              <Link className="text-primary underline" to="/webhook-integrations">
                Webhook integrations
              </Link>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Payments & Revenue Ops
              </h3>
              <p>
                Payment gateway integrations with Razorpay, Instamojo, and more
                to automate invoices and access.
              </p>
              <Link className="text-primary underline" to="/payment-gateway-integrations">
                Payments overview
              </Link>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Ads & Acquisition
              </h3>
              <p>
                Ad launcher for Meta, Google, and LinkedIn tied directly to CRM
                stages and conversion analytics.
              </p>
              <Link className="text-primary underline" to="/automation-funnels">
                Funnel automation
              </Link>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Common Platform Requirements We Cover
            </h3>
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              {[
                "WhatsApp marketing software",
                "WhatsApp sender software",
                "WhatsApp Business API platform",
                "omnichannel automation platform",
                "marketing automation SaaS",
                "AI funnel builder",
                "AI landing page builder",
                "AI chatbots WhatsApp",
                "AI marketing automation",
                "CRM with WhatsApp automation",
                "WhatsApp CRM integration",
                "CRM pipeline management",
                "workflow automation software",
                "visual workflow builder",
                "workflow triggers",
                "omnichannel marketing automation",
                "customer journey automation",
                "webhook automation",
                "webhook integrations",
                "Pabbly integration",
                "Pabbly connect",
                "payment gateway integrations",
                "payment automation",
                "Razorpay integration",
                "Instamojo integration",
                "Instagram automation",
                "Instagram DM automation",
                "Instagram comment automation",
                "AI auto-funnel generation",
                "lead funnels",
                "VSL funnels",
                "webinar funnels",
                "funnel builder software",
                "CRM pipelines",
                "visual workflows",
                "ad launcher",
                "Meta ads",
                "Google ads",
                "LinkedIn ads",
                "WhatsApp Business API enabled",
                "form builder software",
                "lead capture forms",
              ].map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-border bg-card px-3 py-1"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <article>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                WhatsApp Marketing Software
              </h2>
              <p className="text-muted-foreground mb-3">
                Launch compliant WhatsApp journeys with templates, opt-in
                governance, and CRM-based targeting.
              </p>
              <Link className="text-primary underline" to="/whatsapp-marketing-software">
                WhatsApp marketing software
              </Link>
            </article>
            <article>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Instagram Automation
              </h2>
              <p className="text-muted-foreground mb-3">
                Automate DMs and comment replies, capture leads, and sync to CRM.
              </p>
              <Link className="text-primary underline" to="/instagram-automation">
                Instagram automation
              </Link>
            </article>
            <article>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                AI Funnel Builder
              </h2>
              <p className="text-muted-foreground mb-3">
                Generate funnels with AI and connect payments, CRM, and WhatsApp.
              </p>
              <Link className="text-primary underline" to="/ai-funnel-builder">
                AI funnel builder
              </Link>
            </article>
            <article>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                AI Landing Page Builder
              </h2>
              <p className="text-muted-foreground mb-3">
                Build high-converting pages with forms, payments, and lead routing.
              </p>
              <Link className="text-primary underline" to="/ai-landing-page-builder">
                AI landing page builder
              </Link>
            </article>
            <article>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                AI Chatbots for WhatsApp
              </h2>
              <p className="text-muted-foreground mb-3">
                Deploy AI chatbots with CRM context and workflow triggers.
              </p>
              <Link className="text-primary underline" to="/ai-chatbots-whatsapp">
                AI chatbots for WhatsApp
              </Link>
            </article>
            <article>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                CRM with WhatsApp Automation
              </h2>
              <p className="text-muted-foreground mb-3">
                Manage pipelines, lifecycle stages, and automated follow-ups.
              </p>
              <Link className="text-primary underline" to="/crm-with-whatsapp-automation">
                CRM with WhatsApp automation
              </Link>
            </article>
            <article>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Workflow Automation Software
              </h2>
              <p className="text-muted-foreground mb-3">
                Build visual workflows across WhatsApp, email, SMS, and IVR.
              </p>
              <Link className="text-primary underline" to="/workflow-automation">
                Workflow automation
              </Link>
            </article>
            <article>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Webhook Integrations & Pabbly Integration
              </h2>
              <p className="text-muted-foreground mb-3">
                Sync external apps with real-time webhooks and native Pabbly
                connections.
              </p>
              <div className="space-x-3">
                <Link className="text-primary underline" to="/webhook-integrations">
                  Webhook integrations
                </Link>
                <Link className="text-primary underline" to="/pabbly-integration">
                  Pabbly integration
                </Link>
              </div>
            </article>
            <article>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Payment Gateway Integrations
              </h2>
              <p className="text-muted-foreground mb-3">
                Automate payments, invoices, and access with Razorpay and
                Instamojo.
              </p>
              <Link className="text-primary underline" to="/payment-gateway-integrations">
                Payment gateway integrations
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Explore Dcore Marketing Automation Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            {[
              { label: "WhatsApp Marketing Software", to: "/whatsapp-marketing-software" },
              { label: "WhatsApp Sender Software", to: "/whatsapp-sender-software" },
              { label: "WhatsApp Business API Included", to: "/whatsapp-business-api-included" },
              { label: "Instagram DM & Comment Automation", to: "/instagram-automation" },
              { label: "Automation Funnels", to: "/automation-funnels" },
              { label: "AI Funnel Builder", to: "/ai-funnel-builder" },
              { label: "AI Landing Page Builder", to: "/ai-landing-page-builder" },
              { label: "AI Chatbots for WhatsApp", to: "/ai-chatbots-whatsapp" },
              { label: "CRM with WhatsApp Automation", to: "/crm-with-whatsapp-automation" },
              { label: "Workflow Automation", to: "/workflow-automation" },
              { label: "Form Builder", to: "/form-builder" },
              { label: "Webhook Integrations", to: "/webhook-integrations" },
              { label: "Pabbly Integration", to: "/pabbly-integration" },
              { label: "Payment Gateway Integrations", to: "/payment-gateway-integrations" },
              { label: "Pricing", to: "/pricing" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-lg border border-border bg-card p-4 text-foreground hover:border-primary/60 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <dl className="space-y-6 text-muted-foreground">
            <div>
              <dt className="font-semibold text-foreground">
                Is WhatsApp Business API sold separately?
              </dt>
              <dd>
                No. WhatsApp Business API is enabled during onboarding and is
                included with your subscription. Dcore does not sell API access
                separately.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">
                Can I automate across WhatsApp, email, SMS, and IVR?
              </dt>
              <dd>
                Yes. Dcore provides omnichannel marketing automation with
                workflow triggers and AI-generated funnels.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">
                Do you support integrations and webhooks?
              </dt>
              <dd>
                Yes. Native Pabbly integration and webhooks connect Dcore with
                your existing stack.
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Layout>
  </>
);

export default AllInOneMarketingAutomationPlatform;
