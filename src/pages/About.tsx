import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import {
  Cloud,
  Database,
  Mail,
  MessageSquare,
  Shield,
  ShoppingCart,
  Sparkles,
  Target,
  TrendingUp,
  Workflow,
} from "lucide-react";
import { AntigravityBg } from "@/components/home/AntigravityBg";
import { TiltWrapper } from "@/components/ui/TiltWrapper";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const services = [
  {
    title: "WhatsApp Business API Solutions",
    icon: MessageSquare,
    desc: "Official API integration, automation workflows, and customer conversation management.",
  },
  {
    title: "CRM and ERP Development",
    icon: Database,
    desc: "Custom software for leads, sales, operations, and internal team coordination.",
  },
  {
    title: "Cloud-Based Software Development",
    icon: Cloud,
    desc: "Scalable cloud applications built for reliability, speed, and long-term growth.",
  },
  {
    title: "Bulk Messaging Systems",
    icon: Mail,
    desc: "Campaign communication tools with audience segmentation and delivery control.",
  },
  {
    title: "Website and E-Commerce Development",
    icon: ShoppingCart,
    desc: "Conversion-focused websites and e-commerce platforms with automation-ready architecture.",
  },
  {
    title: "Digital Marketing and Automation Tools",
    icon: TrendingUp,
    desc: "Lead capture, nurturing, and conversion workflows with measurable performance tracking.",
  },
];

const focusAreas = [
  {
    title: "Automating customer communication",
    icon: MessageSquare,
    desc: "Reduce manual follow-ups by implementing structured and responsive communication journeys.",
  },
  {
    title: "Improving lead generation and conversion",
    icon: Target,
    desc: "Turn inbound demand into qualified opportunities through workflow-driven execution.",
  },
  {
    title: "Building scalable cloud applications",
    icon: Cloud,
    desc: "Design systems that remain stable as business volume and process complexity increase.",
  },
  {
    title: "Enhancing customer support systems",
    icon: Workflow,
    desc: "Connect customer data, communication, and team actions to speed up issue resolution.",
  },
];

export default function About() {
  return (
    <Layout>
      <AntigravityBg />

      <Section className="relative z-10 pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-gray-200/50 mb-8 backdrop-blur-xl shadow-sm">
              <Sparkles className="w-4 h-4 text-gray-900" />
              <span className="text-sm font-semibold tracking-tight text-gray-800">
                About Dcore Systems LLP
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-7">
              Technology Solutions
              <br />
              <span className="text-gray-900">for sustainable business growth</span>
            </h1>

            <p className="text-xl md:text-2xl font-medium text-gray-600 max-w-3xl mx-auto leading-snug tracking-tight">
              Dcore Systems LLP is an India-based technology solutions company specializing in
              business automation, communication platforms, and digital transformation services.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mt-6">
              We help startups, SMEs, and enterprises streamline operations, improve customer
              engagement, and scale with reliable, cost-effective digital systems.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-24 relative z-10 border-t border-gray-200/50 bg-white/40 backdrop-blur-md">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Core Services</h2>
            <p className="text-lg text-gray-600">
              End-to-end implementation across communication, automation, and cloud systems.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <TiltWrapper key={service.title}>
                <div className="bg-white/85 p-8 rounded-[24px] border border-gray-200/60 shadow-sm h-full transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 border border-gray-200/50">
                    <service.icon className="w-5 h-5 text-gray-900" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              </TiltWrapper>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="py-24 relative z-10 bg-gray-50/60 border-t border-gray-200/50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Key Focus Areas</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {focusAreas.map((area) => (
              <TiltWrapper key={area.title}>
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-[24px] border border-gray-200/80 shadow-sm flex items-start gap-4 h-full">
                  <div className="mt-1 bg-gray-200 text-gray-800 p-2 rounded-lg">
                    <area.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h3>
                    <p className="text-gray-600">{area.desc}</p>
                  </div>
                </div>
              </TiltWrapper>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="py-24 bg-gray-900 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-900/40 via-gray-900 to-gray-900" />
        <Container className="relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">
            Looking for a reliable technology partner?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Work with a team focused on practical execution and long-term scalability.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-gray-900 rounded-full font-bold shadow-xl hover:bg-gray-100 transition-all"
          >
            Contact Dcore Systems
          </Link>
        </Container>
      </Section>
    </Layout>
  );
}

