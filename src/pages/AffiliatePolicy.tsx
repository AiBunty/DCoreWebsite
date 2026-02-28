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
                <span className="text-sm font-semibold tracking-tight text-gray-800">Affiliate Policy</span>
              </div>
            </div>
            
            <h1 className="animate-slide-up text-5xl md:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
              Affiliate Policy
            </h1>
          </div>
        </Container>
      </Section>

      <Section className="py-24 relative z-10 border-t border-gray-200/50">
        <Container>
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl p-12 rounded-[32px] border border-gray-200/60 shadow-sm prose prose-invert max-w-none text-gray-700 leading-relaxed">
            <div className="space-y-6 text-gray-700">
  <p>Join our affiliate program and earn commissions for every referred customer.</p>
  
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Program Overview</h2>
    <p>Affiliates earn 20% commission on referred annual subscriptions and 15% on monthly plans.</p>
  </div>
  
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Eligibility</h2>
    <p>Affiliates must have an active business and agree to promote Dcore Systems ethically.</p>
  </div>
  
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Commissions</h2>
    <p>Commissions are credited when referred customers complete signup and paid conversion occurs.</p>
  </div>
  
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
    <p>Affiliates can request payments monthly via bank transfer or other agreed methods.</p>
  </div>
  
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Restrictions</h2>
    <p>Affiliates cannot use PPC, trademark bidding, or misleading marketing without approval.</p>
  </div>
  
  <p className="text-sm text-gray-500 mt-8">Last updated: February 2026</p>
</div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
