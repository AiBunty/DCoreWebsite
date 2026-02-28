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
          <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-xl p-12 rounded-[32px] border border-gray-200/60 shadow-sm">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input type="text" className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-white shadow-sm focus:ring-2 focus:ring-gray-700 outline-none" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-white shadow-sm focus:ring-2 focus:ring-gray-700 outline-none" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
                <input type="text" className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-white shadow-sm focus:ring-2 focus:ring-gray-700 outline-none" placeholder="Your company" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea className="w-full h-24 p-4 rounded-xl border border-gray-200 bg-white shadow-sm focus:ring-2 focus:ring-gray-700 outline-none resize-none" placeholder="Tell us about your needs"></textarea>
              </div>
              <button type="button" className="w-full h-12 bg-gray-900 text-white rounded-xl font-bold shadow-md hover:bg-gray-800 transition-all">
                Schedule Demo
              </button>
            </form>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

