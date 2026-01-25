import { Layout } from "@/components/Layout";
import { CTASection } from "@/components/CTASection";
import { GlassCard, GlassSection } from "@/components/GlassCard";
import { 
  MessageSquare, 
  Calendar, 
  CreditCard, 
  Users, 
  BarChart3, 
  Zap,
  Mail,
  FileText,
  Globe,
  Shield
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "WhatsApp Automation",
    description: "Send automated follow-ups, broadcasts, and instant replies to leads 24/7.",
  },
  {
    icon: Calendar,
    title: "Smart Booking",
    description: "Calendar scheduling with automated reminders to reduce no-shows.",
  },
  {
    icon: CreditCard,
    title: "Payment Collection",
    description: "Razorpay and UPI integration with automatic invoicing and payment reminders.",
  },
  {
    icon: Users,
    title: "CRM & Pipelines",
    description: "Track every lead from first touch to close with visual sales pipelines.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Real-time insights into your business growth with actionable metrics.",
  },
  {
    icon: Zap,
    title: "Marketing Funnels",
    description: "Build high-converting landing pages and funnels in minutes, not days.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Automated email sequences that nurture leads while you focus on closing.",
  },
  {
    icon: FileText,
    title: "Proposals & Invoices",
    description: "Create professional proposals and invoices with one-click payment links.",
  },
  {
    icon: Globe,
    title: "Website Builder",
    description: "Build professional websites without any coding knowledge.",
  },
  {
    icon: Shield,
    title: "Team Management",
    description: "Assign leads to team members, track performance, and manage permissions.",
  },
];

export default function FeaturesPage() {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              All-in-One Business Growth Platform
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to capture leads, nurture them, and close more sales — in one platform.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <GlassCard key={index}>
                <div className="glass-card-content p-8">
                  <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
