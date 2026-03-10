import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { Section } from "../components/layout/Section";
import { Container } from "../components/layout/Container";
import { AgreementEditor } from "../components/AgreementEditor";
import { getActiveTemplates } from "../data/agreementTemplates";
import { AntigravityBg } from "../components/home/AntigravityBg";
import { TiltWrapper } from "../components/ui/TiltWrapper";
import { DCoreButton } from "../components/DCoreButton";
import { Sparkles, FileText, Download, Zap, Info, Lock } from "lucide-react";

const ACCESS_PIN = "8442";

export default function AgreementGenerator() {
  const templates = getActiveTemplates();
  const [unlocked, setUnlocked] = useState(false);
  const [pin, setPin] = useState("");
  const [pinError, setPinError] = useState(false);

  const handleUnlock = () => {
    if (pin === ACCESS_PIN) {
      setUnlocked(true);
      setPinError(false);
    } else {
      setPinError(true);
      setPin("");
    }
  };

  if (!unlocked) {
    return (
      <Layout>
        <AntigravityBg />
        <Section className="relative z-10 min-h-screen flex items-center">
          <Container>
            <div className="max-w-sm mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-900 text-white mb-6 shadow-lg">
                <Lock className="w-7 h-7" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight mb-2">Agreement Generator</h1>
              <p className="text-gray-500 text-sm mb-8">Enter your access PIN to continue</p>
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-[20px] p-6 shadow-sm space-y-4">
                <input
                  type="password"
                  inputMode="numeric"
                  maxLength={6}
                  value={pin}
                  onChange={(e) => { setPin(e.target.value); setPinError(false); }}
                  onKeyDown={(e) => e.key === "Enter" && handleUnlock()}
                  placeholder="Enter PIN"
                  className={`w-full text-center text-2xl tracking-[0.5em] font-bold border rounded-xl px-4 py-3 outline-none transition-colors ${
                    pinError
                      ? "border-red-400 bg-red-50 text-red-700"
                      : "border-gray-200 bg-gray-50 text-gray-900 focus:border-gray-900"
                  }`}
                  autoFocus
                />
                {pinError && (
                  <p className="text-red-500 text-sm">Incorrect PIN. Please try again.</p>
                )}
                <DCoreButton variant="primary" className="w-full" onClick={handleUnlock}>
                  Unlock
                </DCoreButton>
              </div>
            </div>
          </Container>
        </Section>
      </Layout>
    );
  }

  const featureItems = [
    {
      icon: FileText,
      label: "Professional Templates",
      desc: "Pre-built agreement templates for common business scenarios",
    },
    {
      icon: Zap,
      label: "Instant Generation",
      desc: "Fill in your details and generate PDFs instantly in your browser",
    },
    {
      icon: Download,
      label: "Branded PDFs",
      desc: "Professional PDFs with your logo and watermark included",
    },
  ];

  return (
    <Layout>
      <AntigravityBg />

      {/* Hero Section */}
      <Section className="relative z-10 pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-gray-200/50 mb-8 backdrop-blur-xl shadow-sm">
              <Sparkles className="w-4 h-4 text-gray-900" />
              <span className="text-sm font-semibold tracking-tight text-gray-800">
                Agreement Generator
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
              Generate Professional Agreements
              <br />
              <span className="text-gray-900">in Minutes</span>
            </h1>
            <p className="text-xl font-medium text-gray-600 max-w-2xl mx-auto leading-snug tracking-tight">
              Create, customize, and download legally formatted agreements with your company branding.
              Editable fields, instant PDF generation, and professional templates.
            </p>
          </div>
        </Container>
      </Section>

      {/* Features Overview */}
      <Section className="py-16 relative z-10 border-t border-gray-200/50 bg-gray-50/60">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      {/* Agreement Editor Section */}
      <Section className="py-16 relative z-10">
        <Container>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
              Cover Letter &amp; Agreement Package
            </h2>
            <p className="text-gray-600">
              Fill in the form once — generates a combined PDF with the Cover Letter followed by the Statement of Work.
            </p>
          </div>

          <AgreementEditor templates={templates} />
        </Container>
      </Section>

      {/* Info Section */}
      <Section className="py-16 relative z-10 border-t border-gray-200/50 bg-gray-50/60">
        <Container>
          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold text-gray-900 tracking-tight mb-6">How It Works</h3>
            <div className="space-y-6">
              {[
                { step: "1", title: "Fill in Details", desc: "Enter client name, dates, service scope and other details — they apply to both documents automatically." },
                { step: "2", title: "Review Preview", desc: "The live preview shows the Cover Letter followed by the SOW so you can check everything before downloading." },
                { step: "3", title: "Download Full Package", desc: "One click generates a single PDF with the Cover Letter on page 1 and the Agreement starting right after." },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-md bg-gray-900 text-white text-sm font-semibold">
                      {step}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{title}</h4>
                    <p className="text-gray-600 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-white/70 backdrop-blur-sm rounded-[20px] border border-gray-200/50 shadow-sm">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Legal Disclaimer</h4>
                  <p className="text-gray-600 text-sm">
                    This tool generates template agreements for reference purposes. While our templates are based on standard legal practices,
                    we recommend having all agreements reviewed by a qualified legal professional before signing. DCORE SYSTEMS LLP is not providing
                    legal advice, and the use of this tool does not create an attorney-client relationship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
