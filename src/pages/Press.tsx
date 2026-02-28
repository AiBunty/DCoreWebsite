import { Layout } from "@/components/Layout";
import { AntigravityBg } from "@/components/home/AntigravityBg";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Sparkles } from "lucide-react";

export default function Press() {
  return (
    <Layout>
      <AntigravityBg />
      
      <Section className="relative z-10 pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-slide-up" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-gray-200/50 mb-8 backdrop-blur-xl shadow-sm">
                <Sparkles className="w-4 h-4 text-gray-900" />
                <span className="text-sm font-semibold tracking-tight text-gray-800">Press & Media</span>
              </div>
            </div>
            
            <h1 className="animate-slide-up text-5xl md:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
              News & Media Coverage
            </h1>
            
            <p className="animate-slide-up text-xl font-medium text-gray-500 max-w-2xl mx-auto leading-snug tracking-tight" style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
              Follow Dcore Systems LLP's journey in transforming business automation and digital solutions across India.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-24 relative z-10 border-t border-gray-200/50">
        <Container>
          <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-xl p-12 rounded-[32px] border border-gray-200/60 shadow-sm">
            <p className="text-gray-600 leading-relaxed text-lg">Latest press releases and media coverage coming soon.</p>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

