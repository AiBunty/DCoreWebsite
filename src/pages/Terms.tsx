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
                <span className="text-sm font-semibold tracking-tight text-gray-800">Terms of Use</span>
              </div>
            </div>
            
            <h1 className="animate-slide-up text-5xl md:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
              Terms of Use
            </h1>
          </div>
        </Container>
      </Section>

      <Section className="py-24 relative z-10 border-t border-gray-200/50">
        <Container>
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl p-12 rounded-[32px] border border-gray-200/60 shadow-sm prose prose-invert max-w-none text-gray-700 leading-relaxed">
            <div className="space-y-6 text-gray-700">
  <p>These Terms of Use govern your use of the Dcore Systems platform and services. By accessing or using our platform, you agree to be bound by these terms.</p>
  
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
    <p>By using the Dcore Systems platform, you agree to comply with all terms and conditions outlined herein.</p>
  </div>
  
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
    <p>We grant you a non-exclusive, non-transferable license to use our platform for lawful business purposes.</p>
  </div>
  
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Limitations</h2>
    <p>You agree not to: (a) Reverse engineer or decompile any part of our platform; (b) Use the platform for illegal activities; (c) Attempt to gain unauthorized access.</p>
  </div>
  
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Disclaimer</h2>
    <p>The platform is provided "as-is" without warranties. Dcore Systems is not liable for indirect or consequential damages.</p>
  </div>
  
  <p className="text-sm text-gray-500 mt-8">Last updated: February 2026</p>
</div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
