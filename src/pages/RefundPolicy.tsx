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
                <span className="text-sm font-semibold tracking-tight text-gray-800">Refund Policy</span>
              </div>
            </div>
            
            <h1 className="animate-slide-up text-5xl md:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
              Refund Policy
            </h1>
          </div>
        </Container>
      </Section>

      <Section className="py-24 relative z-10 border-t border-gray-200/50">
        <Container>
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl p-12 rounded-[32px] border border-gray-200/60 shadow-sm prose prose-invert max-w-none text-gray-700 leading-relaxed">
            <div className="space-y-6 text-gray-700">
  <p>We stand behind our platform. This policy outlines our refund terms and conditions.</p>
  
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Refund Eligibility</h2>
    <p>Refunds are available within 30 days of subscription commencement for cancellations without usage violations.</p>
  </div>
  
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Non-Refundable Items</h2>
    <p>Setup fees, custom development, and committed annual plans are non-refundable unless otherwise agreed in writing.</p>
  </div>
  
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How to Request</h2>
    <p>Submit refund requests to support@dcoresystems.com with order details within 30 days of purchase.</p>
  </div>
  
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Processing Time</h2>
    <p>Approved refunds are processed within 5-7 business days.</p>
  </div>
  
  <p className="text-sm text-gray-500 mt-8">Last updated: February 2026</p>
</div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
