import { Layout } from "@/components/Layout";
import { AntigravityBg } from "@/components/home/AntigravityBg";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Clock3, Mail, MessageSquare, Phone } from "lucide-react";

const timeline = [
  "Day 1-2: Account setup, CRM baseline, and API access checks",
  "Day 3-4: Workflow automation, funnel setup, and QA",
  "Day 5-7: Launch readiness checks and go-live support",
];

const requirements = [
  "Meta Business access and WhatsApp verification availability",
  "Domain or hosting access for integrations",
  "Brand assets and offer details for automation flows",
  "Primary team contact for approvals and handoff",
];

export default function OnboardingSuccess() {
  return (
    <Layout>
      <AntigravityBg />

      <Section className="relative z-10 pt-28 pb-12 border-b border-gray-200/50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold tracking-wide text-gray-600 uppercase mb-4">
              Onboarding Submitted
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 leading-tight tracking-tight mb-4">
              Your Setup Is In Progress
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Our team is reviewing your details and preparing your implementation plan. Keep your
              onboarding references ready so we can move quickly.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="relative z-10 py-14">
        <Container>
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-6">
            <div className="rounded-[28px] border border-gray-200/70 bg-white/85 backdrop-blur-xl p-7 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 mb-5 flex items-center gap-2">
                <Clock3 className="w-5 h-5" />
                Timeline
              </h2>
              <div className="space-y-4">
                {timeline.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gray-900 mt-0.5 shrink-0" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-gray-200/70 bg-white/85 backdrop-blur-xl p-7 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 mb-5">What We Need From You</h2>
              <div className="space-y-4">
                {requirements.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gray-900 mt-0.5 shrink-0" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto mt-6 rounded-[28px] border border-gray-200/70 bg-white/85 backdrop-blur-xl p-7 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Need help right now?</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <a
                href="https://wa.me/918856091300"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-gray-200/70 bg-white/90 p-5 hover:border-gray-300 transition"
              >
                <MessageSquare className="w-5 h-5 text-gray-900 mb-2" />
                <p className="text-sm font-semibold text-gray-900">WhatsApp</p>
                <p className="text-sm text-gray-600">+91 88560 91300</p>
              </a>
              <a
                href="mailto:support@dcoresystems.com"
                className="rounded-2xl border border-gray-200/70 bg-white/90 p-5 hover:border-gray-300 transition"
              >
                <Mail className="w-5 h-5 text-gray-900 mb-2" />
                <p className="text-sm font-semibold text-gray-900">Email</p>
                <p className="text-sm text-gray-600">support@dcoresystems.com</p>
              </a>
              <a
                href="tel:+919766521300"
                className="rounded-2xl border border-gray-200/70 bg-white/90 p-5 hover:border-gray-300 transition"
              >
                <Phone className="w-5 h-5 text-gray-900 mb-2" />
                <p className="text-sm font-semibold text-gray-900">Call</p>
                <p className="text-sm text-gray-600">+91 97665 21300</p>
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-7">
                <Link to="/book-demo">Book A Follow-up Call</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full px-7 border-gray-300 text-gray-900 hover:bg-white"
              >
                <Link to="/onboarding-form">Back to Onboarding Form</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
