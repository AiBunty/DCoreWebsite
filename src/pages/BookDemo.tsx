import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { MascotTip } from "@/components/MascotTip";
import { MascotFrame } from "@/components/MascotFrame";
import { GlassCard, GlassSection } from "@/components/GlassCard";
import { Calendar, Mail, Phone } from "lucide-react";

export default function BookDemoPage() {
  const [isFormLoading, setIsFormLoading] = useState(true);

  const handleFormLoad = () => {
    setIsFormLoading(false);
  };
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Book a 1 to 1 Call
              </h1>
              <p className="text-xl text-muted-foreground">
                Get a personalized walkthrough of Ai Bunty in just 30 minutes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <MascotTip 
                  message="Let's connect! I'll personally show you how to automate your business."
                />
                
                <div className="space-y-4">
                  <GlassCard>
                    <div className="glass-card-content p-4 flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">30-Minute 1 to 1 Call</p>
                        <p className="text-muted-foreground text-sm">Personalized walkthrough</p>
                      </div>
                    </div>
                  </GlassCard>
                  
                  <GlassCard>
                    <div className="glass-card-content p-4 flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Email</p>
                        <p className="text-muted-foreground text-sm">support@dcoresystems.com</p>
                      </div>
                    </div>
                  </GlassCard>
                  
                  <GlassCard>
                    <div className="glass-card-content p-4 flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">📱 Contact Numbers</p>
                        <div className="space-y-1 mt-2">
                          <div>
                            <p className="text-xs text-muted-foreground">WhatsApp API</p>
                            <a href="tel:+918856091300" className="text-muted-foreground text-sm hover:text-primary">
                              +918856091300
                            </a>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">WhatsApp Business & Calling</p>
                            <a href="tel:+919766521300" className="text-muted-foreground text-sm hover:text-primary">
                              +919766521300
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </div>

              {/* Demo Form - Embedded Ai Bunty Form */}
              <GlassCard className="h-full">
                <div className="glass-card-content p-4 overflow-hidden h-full relative min-h-[600px]">
                  {isFormLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-background/50 z-10 rounded-md">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                        <p className="text-sm text-muted-foreground">Loading form...</p>
                      </div>
                    </div>
                  )}
                  <iframe
                    src="https://admin.aibunty.com/widget/form/f10238e5-a750-4bb5-80ea-46173140efb4"
                    style={{ width: '100%', height: '600px', border: 'none', borderRadius: '3px' }}
                    id="inline-f10238e5-a750-4bb5-80ea-46173140efb4"
                    data-form-name="VSL Form"
                    data-layout-iframe-id="inline-f10238e5-a750-4bb5-80ea-46173140efb4"
                    data-form-id="f10238e5-a750-4bb5-80ea-46173140efb4"
                    title="VSL Form"
                    onLoad={handleFormLoad}
                  />
                </div>
              </GlassCard>
            </div>

            {/* YouTube Demo Section */}
            <div className="mt-16">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Watch a Quick Demo First
                </h2>
                <p className="text-muted-foreground">
                  See Ai Bunty in action before your 1 to 1 call
                </p>
              </div>
              <MascotFrame youtubeUrl="https://youtu.be/6M6tS4nCN1Y" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
