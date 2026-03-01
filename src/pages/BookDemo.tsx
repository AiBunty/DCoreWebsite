import { Layout } from "@/components/Layout";
import { AntigravityBg } from "@/components/home/AntigravityBg";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Sparkles } from "lucide-react";

export default function BookDemo() {
  return (
    <Layout>
      <AntigravityBg />
      
      <Section className="relative z-10 pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-slide-up" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-gray-200/50 mb-8 backdrop-blur-xl shadow-sm">
                <Sparkles className="w-4 h-4 text-gray-900" />
                <span className="text-sm font-semibold tracking-tight text-gray-800">Demo</span>
              </div>
            </div>
            
            <h1 className="animate-slide-up text-5xl md:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
              See Dcore Systems in Action
            </h1>
            
            <p className="animate-slide-up text-xl font-medium text-gray-500 max-w-2xl mx-auto leading-snug tracking-tight" style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
              Schedule a personalized demo with our team to see how we can automate your business.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-24 relative z-10 border-t border-gray-200/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <iframe
              src="https://admin.aibunty.com/u2/76998/appointment-booking-from-website?isEmbeded=1"
              style={{
                border: "none",
                width: "100%",
                height: "600px",
                borderRadius: "32px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
              title="Book Demo Appointment"
              loading="lazy"
            />
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

