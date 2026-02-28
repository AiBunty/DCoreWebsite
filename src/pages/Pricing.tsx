import { Layout } from "@/components/Layout";
import { AntigravityBg } from "@/components/home/AntigravityBg";
import { TiltWrapper } from "@/components/ui/TiltWrapper";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Sparkles, Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter Automation",
    subtitle: "For early-stage teams and small businesses",
    price: "Custom quote",
    features: [
      "WhatsApp Business API setup support",
      "Basic CRM workflow configuration",
      "Campaign and follow-up templates",
      "Email and chat implementation support",
    ],
  },
  {
    name: "Growth Automation",
    subtitle: "For scaling SMEs and multi-team operations",
    price: "Custom quote",
    features: [
      "Advanced CRM and ERP process mapping",
      "Lead generation and conversion workflows",
      "Bulk messaging and segmented campaigns",
      "Performance dashboards and reporting",
    ],
  },
  {
    name: "Enterprise Transformation",
    subtitle: "For large organizations and custom deployments",
    price: "Custom quote",
    features: [
      "Cloud-native custom software development",
      "Enterprise integration architecture",
      "Security and governance controls",
      "Dedicated solution consulting and rollout",
    ],
  },
];

export default function Pricing() {
  return (
    <Layout>
      <AntigravityBg />

      <Section className="relative z-10 pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-gray-200/50 mb-8 backdrop-blur-xl shadow-sm">
              <Sparkles className="w-4 h-4 text-gray-900" />
              <span className="text-sm font-semibold tracking-tight text-gray-800">Pricing</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
              Flexible engagement models
              <br />
              <span className="text-gray-900">for every growth stage</span>
            </h1>

            <p className="text-xl font-medium text-gray-600 max-w-3xl mx-auto leading-snug tracking-tight">
              Pricing is scoped based on your process complexity, integration requirements, and
              delivery timeline.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-24 relative z-10 border-t border-gray-200/50">
        <Container>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <TiltWrapper key={plan.name}>
                <div className="bg-white/85 backdrop-blur-sm p-10 rounded-[32px] border border-gray-200/60 shadow-sm flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-600 mb-6">{plan.subtitle}</p>
                  <div className="mb-8">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <p className="text-gray-500 text-sm mt-2">Based on project scope</p>
                  </div>
                  <Link
                    to="/contact"
                    className="w-full h-12 bg-gray-900 text-white rounded-xl font-bold mb-8 flex items-center justify-center hover:bg-gray-800 transition-all"
                  >
                    Request Proposal
                  </Link>
                  <div className="space-y-4 flex-1">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TiltWrapper>
            ))}
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

