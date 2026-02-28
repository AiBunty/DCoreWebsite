import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { AntigravityBg } from "@/components/home/AntigravityBg";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, MessageSquare, Phone } from "lucide-react";

export default function OnboardingForm() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [loadTimedOut, setLoadTimedOut] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (!isLoaded) {
        setLoadTimedOut(true);
        setShowLoader(false);
      }
    }, 9000);

    return () => window.clearTimeout(timer);
  }, [isLoaded]);

  return (
    <Layout>
      <AntigravityBg />

      <Section className="relative z-10 pt-28 pb-12 border-b border-gray-200/50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold tracking-wide text-gray-600 uppercase mb-4">
              Onboarding
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 leading-tight tracking-tight mb-4">
              Start Your Automation Setup
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Share your business details and process requirements. Our team will map your
              WhatsApp, CRM, ERP, and cloud rollout plan.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="relative z-10 py-14">
        <Container>
          <div className="max-w-5xl mx-auto rounded-[28px] border border-gray-200/70 bg-white/85 backdrop-blur-xl p-4 sm:p-6 md:p-8 shadow-sm">
            <div className="relative min-h-[1700px] md:min-h-[1500px]">
              {showLoader && !isLoaded && (
                <div className="absolute inset-0 z-10 rounded-2xl border border-gray-200/60 bg-white/90 flex items-center justify-center text-center px-6">
                  <p className="text-gray-600 text-sm">Loading onboarding form...</p>
                </div>
              )}
              <iframe
                src="https://admin.aibunty.com/widget/form/699acdf5d46f8"
                title="Dcore onboarding form"
                className="w-full h-[1700px] md:h-[1500px] rounded-2xl border-0"
                onLoad={() => {
                  setIsLoaded(true);
                  setShowLoader(false);
                }}
              />
            </div>
            {loadTimedOut && !isLoaded && (
              <p className="mt-4 text-sm text-gray-600">
                If the embedded form is slow, open it directly:{" "}
                <a
                  href="https://admin.aibunty.com/widget/form/699acdf5d46f8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 text-gray-900"
                >
                  Open onboarding form
                </a>
              </p>
            )}
          </div>
        </Container>
      </Section>

      <Section className="relative z-10 py-6 pb-16">
        <Container>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-4">
            <a
              href="https://wa.me/918856091300"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-gray-200/70 bg-white/85 p-5 hover:border-gray-300 transition"
            >
              <MessageSquare className="w-5 h-5 text-gray-900 mb-2" />
              <p className="text-sm font-semibold text-gray-900">WhatsApp Support</p>
              <p className="text-sm text-gray-600">+91 88560 91300</p>
            </a>
            <a
              href="mailto:support@dcoresystems.com"
              className="rounded-2xl border border-gray-200/70 bg-white/85 p-5 hover:border-gray-300 transition"
            >
              <Mail className="w-5 h-5 text-gray-900 mb-2" />
              <p className="text-sm font-semibold text-gray-900">Email Support</p>
              <p className="text-sm text-gray-600">support@dcoresystems.com</p>
            </a>
            <a
              href="tel:+919766521300"
              className="rounded-2xl border border-gray-200/70 bg-white/85 p-5 hover:border-gray-300 transition"
            >
              <Phone className="w-5 h-5 text-gray-900 mb-2" />
              <p className="text-sm font-semibold text-gray-900">Business Calling</p>
              <p className="text-sm text-gray-600">+91 97665 21300</p>
            </a>
          </div>
          <div className="max-w-5xl mx-auto mt-6 flex justify-center">
            <Button asChild className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-7">
              <Link to="/onboarding-success">View Onboarding Success Page</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
