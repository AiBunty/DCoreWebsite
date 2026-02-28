import { Layout } from "@/components/Layout";
import { AntigravityBg } from "@/components/home/AntigravityBg";
import { TiltWrapper } from "@/components/ui/TiltWrapper";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import {
  BarChart3,
  Cloud,
  Database,
  Globe,
  MessageSquare,
  Send,
  Shield,
  Sparkles,
  Target,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";

const featureItems = [
  {
    icon: MessageSquare,
    label: "WhatsApp API Enablement",
    desc: "Official setup, template workflows, and agent routing.",
  },
  {
    icon: Send,
    label: "Bulk Messaging Engine",
    desc: "Campaign communication with audience segmentation.",
  },
  {
    icon: Database,
    label: "CRM and ERP Modules",
    desc: "Lead pipelines, operations boards, and reports.",
  },
  {
    icon: Workflow,
    label: "Workflow Automation",
    desc: "Trigger-based automation across business processes.",
  },
  {
    icon: Cloud,
    label: "Cloud Application Stack",
    desc: "Scalable deployments for stable business operations.",
  },
  {
    icon: Globe,
    label: "Web and Commerce Platforms",
    desc: "Conversion-focused websites and e-commerce builds.",
  },
  {
    icon: BarChart3,
    label: "Analytics Dashboards",
    desc: "Track lead flow, campaign outcomes, and support quality.",
  },
  {
    icon: Target,
    label: "Conversion Optimization",
    desc: "Improve lead-to-sale performance with process tuning.",
  },
  {
    icon: Users,
    label: "Team Collaboration Controls",
    desc: "Role-based access and shared action workflows.",
  },
  {
    icon: Shield,
    label: "Data Security",
    desc: "Secure operations with access governance and auditability.",
  },
  {
    icon: Wrench,
    label: "Custom Integrations",
    desc: "Connect existing tools with APIs and webhook automation.",
  },
  {
    icon: MessageSquare,
    label: "Implementation Support",
    desc: "Technical guidance during onboarding and rollout.",
  },
];

export default function Features() {
  return (
    <Layout>
      <AntigravityBg />

      <Section className="relative z-10 pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-gray-200/50 mb-8 backdrop-blur-xl shadow-sm">
              <Sparkles className="w-4 h-4 text-gray-900" />
              <span className="text-sm font-semibold tracking-tight text-gray-800">
                Platform Features
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
              Everything needed to run
              <br />
              <span className="text-gray-900">modern automation operations</span>
            </h1>

            <p className="text-xl font-medium text-gray-600 max-w-3xl mx-auto leading-snug tracking-tight">
              Dcore Systems combines communication infrastructure, automation workflows, and cloud
              software development into one practical delivery stack.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-24 relative z-10 border-t border-gray-200/50 bg-gray-50/60">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureItems.map((feature) => (
              <TiltWrapper key={feature.label}>
                <div className="bg-white/85 backdrop-blur-sm p-7 rounded-[24px] border border-gray-200/60 shadow-sm flex flex-col items-start h-full">
                  <div className="w-11 h-11 bg-gray-100 rounded-lg flex items-center justify-center mb-4 border border-gray-200/50">
                    <feature.icon className="w-5 h-5 text-gray-900" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{feature.label}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              </TiltWrapper>
            ))}
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

