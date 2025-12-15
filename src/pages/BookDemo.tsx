import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { MascotTip } from "@/components/MascotTip";
import { Calendar, Mail, Phone } from "lucide-react";

export default function BookDemoPage() {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Book Your Free Demo
              </h1>
              <p className="text-xl text-muted-foreground">
                See how Ai Bunty can transform your business in just 30 minutes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <MascotTip 
                  message="I'll show you exactly how to automate your business growth!"
                />
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-foreground">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">30-Minute Demo</p>
                      <p className="text-muted-foreground text-sm">Personalized walkthrough</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-foreground">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground text-sm">hello@aibunty.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-foreground">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-muted-foreground text-sm">+91 98765 43210</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Demo Form */}
              <div className="bg-card rounded-2xl p-8 shadow-medium border border-border">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="you@company.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone / WhatsApp
                    </label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Business Type
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                      <option value="">Select your business type</option>
                      <option value="coach">Coach / Trainer</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="fitness">Fitness Club</option>
                      <option value="consultant">Consultant / Advisor</option>
                      <option value="events">Event Planner</option>
                      <option value="agency">Agency</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <Button variant="hero" size="xl" className="w-full">
                    Book My Free Demo
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
