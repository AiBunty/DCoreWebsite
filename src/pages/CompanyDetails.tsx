import { Layout } from "@/components/Layout";
import { AntigravityBg } from "@/components/home/AntigravityBg";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Sparkles } from "lucide-react";

export default function CompanyDetails() {
  return (
    <Layout>
      <AntigravityBg />
      
      <Section className="relative z-10 pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-slide-up" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-gray-200/50 mb-8 backdrop-blur-xl shadow-sm">
                <Sparkles className="w-4 h-4 text-gray-900" />
                <span className="text-sm font-semibold tracking-tight text-gray-800">Company Details</span>
              </div>
            </div>
            
            <h1 className="animate-slide-up text-5xl md:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
              About Dcore Systems LLP
            </h1>
          </div>
        </Container>
      </Section>

      <Section className="py-24 relative z-10 border-t border-gray-200/50">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white/80 backdrop-blur-xl p-12 rounded-[32px] border border-gray-200/60 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Information</h2>
              
              <div className="space-y-4 text-gray-700">
                <p><strong>Company Name:</strong> DCORE SYSTEMS LLP</p>
                <p><strong>Date of Incorporation:</strong> 05 January 2026</p>
                <p><strong>LLPIN:</strong> ACT-9625</p>
                <p><strong>GSTIN:</strong> 27AAZFD2232J1Z3</p>
                <p className="pt-4"><strong>Registered Office:</strong><br/>BLDG C FLAT NO 7 S NO 244 BANER PUSHPANAGAR D P<br/>Aundh Haveli, Pune - 411007<br/>Maharashtra, India</p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl p-12 rounded-[32px] border border-gray-200/60 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-4 text-gray-700">
                <p><strong>Support Email:</strong> support@dcoresystems.com</p>
                <p><strong>WhatsApp API:</strong> +91 88560 91300</p>
                <p><strong>WhatsApp Business & Calling:</strong> +91 97665 21300</p>
                <p><strong>Website:</strong> www.dcoresystems.com</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

