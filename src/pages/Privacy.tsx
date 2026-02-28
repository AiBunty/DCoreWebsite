import { Layout } from "@/components/Layout";
import { AntigravityBg } from "@/components/home/AntigravityBg";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Sparkles } from "lucide-react";

export default function Legal() {
  return (
    <Layout>
      <AntigravityBg />
      
      <Section className="relative z-10 pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-slide-up" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-gray-200/50 mb-8 backdrop-blur-xl shadow-sm">
                <Sparkles className="w-4 h-4 text-gray-900" />
                <span className="text-sm font-semibold tracking-tight text-gray-800">Privacy Policy</span>
              </div>
            </div>
            
            <h1 className="animate-slide-up text-5xl md:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
              Privacy Policy
            </h1>
          </div>
        </Container>
      </Section>

      <Section className="py-24 relative z-10 border-t border-gray-200/50">
        <Container>
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl p-12 rounded-[32px] border border-gray-200/60 shadow-sm prose prose-invert max-w-none text-gray-700 leading-relaxed">
            <div className="space-y-6 text-gray-700">
  <p>Your privacy is important to us. This policy explains how we collect, use, and protect your data.</p>
  
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Data Collection</h2>
    <p>We collect data that you voluntarily provide, including account information, contact details, and usage patterns.</p>
  </div>
  
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Data Usage</h2>
    <p>We use your data to provide and improve our services, communicate with you, and ensure platform security.</p>
  </div>
  
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Protection</h2>
    <p>We implement industry-standard security measures to protect your data from unauthorized access.</p>
  </div>
  
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-4">4. GDPR Compliance</h2>
    <p>We comply with GDPR and provide you with rights to access, modify, and delete your data.</p>
  </div>
  
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Contact Us</h2>
    <p>For privacy questions, contact us at support@dcoresystems.com</p>
  </div>
  
  <p className="text-sm text-gray-500 mt-8">Last updated: February 2026</p>
</div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
