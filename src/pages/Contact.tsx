import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Mail, Phone, Globe, Sparkles } from "lucide-react";
import { AntigravityBg } from "@/components/home/AntigravityBg";
import { TiltWrapper } from "@/components/ui/TiltWrapper";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export default function Contact() {
  const [isFormLoading, setIsFormLoading] = useState(true);
  const bookingCrmFormUrl = "https://admin.aibunty.com/widget/form/699acdf5d46f8";

  return (
    <Layout>
      <AntigravityBg />

      <Section className="relative z-10 pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-gray-200/50 mb-8 backdrop-blur-xl shadow-sm">
              <Sparkles className="w-4 h-4 text-gray-900" />
              <span className="text-sm font-semibold tracking-tight text-gray-800">
                Support and Inquiries
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
              Connect with
              <br />
              <span className="text-gray-900">Dcore Systems</span>
            </h1>

            <p className="text-xl font-medium text-gray-600 max-w-3xl mx-auto leading-snug tracking-tight">
              Share your use case and we will recommend the right automation and digital
              transformation approach for your business.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-16 relative z-10">
        <Container>
          <div className="grid lg:grid-cols-5 gap-12 items-start max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <TiltWrapper>
                <div className="bg-white/85 backdrop-blur-2xl rounded-[32px] p-10 border border-white/40 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gray-200/50 blur-[50px] -z-10 rounded-full" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>

                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gray-100 rounded-xl">
                        <Mail className="w-5 h-5 text-gray-700" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                          Support Email
                        </p>
                        <a
                          href="mailto:support@dcoresystems.com"
                          className="text-lg font-medium text-gray-900 hover:text-gray-900 transition-colors"
                        >
                          support@dcoresystems.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gray-100 rounded-xl">
                        <Phone className="w-5 h-5 text-gray-700" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                          WhatsApp API
                        </p>
                        <a
                          href="tel:+918856091300"
                          className="text-lg font-medium text-gray-900 hover:text-gray-900 transition-colors"
                        >
                          +91 88560 91300
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gray-100 rounded-xl">
                        <Phone className="w-5 h-5 text-gray-700" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                          WhatsApp Business and Calling
                        </p>
                        <a
                          href="tel:+919766521300"
                          className="text-lg font-medium text-gray-900 hover:text-gray-900 transition-colors"
                        >
                          +91 97665 21300
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gray-100 rounded-xl">
                        <Globe className="w-5 h-5 text-gray-700" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                          Website
                        </p>
                        <a
                          href="https://www.dcoresystems.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg font-medium text-gray-900 hover:text-gray-900 transition-colors"
                        >
                          www.dcoresystems.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltWrapper>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white/65 backdrop-blur-xl rounded-[32px] border border-gray-200/50 shadow-sm overflow-hidden">
                <div className="h-14 bg-white/80 border-b border-gray-200/50 flex items-center px-6 gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="ml-4 text-sm font-medium text-gray-500">Project inquiry</div>
                </div>
                <div className="p-8 md:p-10 bg-gradient-to-b from-white/40 to-gray-50/40">
                  <p className="text-sm text-gray-600 mb-4">
                    Fill this booking CRM form and our team will contact you with the right solution plan.
                  </p>
                  <div className="relative rounded-2xl border border-gray-200 bg-white overflow-hidden">
                    {isFormLoading && (
                      <div className="absolute inset-0 z-10 bg-white/90 backdrop-blur-sm flex items-center justify-center">
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin" />
                          <p className="text-sm text-gray-600">Loading CRM form...</p>
                        </div>
                      </div>
                    )}
                    <iframe
                      src={bookingCrmFormUrl}
                      id="inline-699acdf5d46f8"
                      title="Project inquiry booking CRM form"
                      data-form-name="Project inquiry"
                      data-layout-iframe-id="inline-699acdf5d46f8"
                      data-form-id="699acdf5d46f8"
                      className="w-full h-[1150px] border-0"
                      onLoad={() => setIsFormLoading(false)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

