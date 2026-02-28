import { Layout } from "@/components/Layout";
import { AntigravityBg } from "@/components/home/AntigravityBg";
import { TiltWrapper } from "@/components/ui/TiltWrapper";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Sparkles, Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function Solution() {
  return (
    <Layout>
      <AntigravityBg />
      
      <Section className="relative z-10 pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-slide-up" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-gray-200/50 mb-8 backdrop-blur-xl shadow-sm">
                <Sparkles className="w-4 h-4 text-gray-900" />
                <span className="text-sm font-semibold tracking-tight text-gray-800">Solution</span>
              </div>
            </div>
            
            <h1 className="animate-slide-up text-5xl md:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
              WhatsApp Marketing Suite
            </h1>
            
            <p className="animate-slide-up text-xl font-medium text-gray-500 max-w-2xl mx-auto leading-snug tracking-tight" style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
              Complete marketing automation through WhatsApp. Drive engagement and conversions with precision messaging.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-24 relative z-10 border-t border-gray-200/50 bg-gray-50/60">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {["Automated workflows", "Real-time analytics", "24/7 intelligent support", "Seamless integrations"].map((feature, idx) => (
              <TiltWrapper key={idx}>
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-[24px] border border-gray-200/60 shadow-sm flex items-start gap-4">
                  <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature}</h3>
                    <p className="text-gray-500">Advanced automation built for modern businesses.</p>
                  </div>
                </div>
              </TiltWrapper>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="py-24 bg-gray-900 relative overflow-hidden text-center z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-900/40 via-gray-900 to-gray-900"></div>
        <Container className="relative z-10">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to transform your business?</h2>
          <Link 
            to="/book-demo" 
            className="inline-block px-8 py-4 bg-white text-gray-900 rounded-full font-bold shadow-xl hover:bg-gray-100 transition-all"
          >
            Book a Demo
          </Link>
        </Container>
      </Section>
    </Layout>
  );
}
