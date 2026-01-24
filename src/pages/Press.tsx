import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

const pressReleases = [
  {
    date: "Jan 22, 2026",
    title: "D'CORE Systems Launches AI-Powered Business Automation Platform",
    description: "New platform designed specifically for Indian businesses combines WhatsApp automation, CRM, and payments",
    link: "#"
  },
  {
    date: "Jan 15, 2026",
    title: "Series A Funding Announcement",
    description: "D'CORE Systems secures Series A funding to expand AI capabilities and market reach",
    link: "#"
  }
];

export default function Press() {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Press Kit
            </h1>
            <p className="text-xl text-muted-foreground">
              Latest news, press releases, and media resources from D'CORE Systems.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Latest Press Releases</h2>
            <div className="space-y-6">
              {pressReleases.map((release, idx) => (
                <div key={idx} className="p-6 bg-card rounded-lg border border-border hover:border-primary transition">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-sm text-muted-foreground">{release.date}</span>
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{release.title}</h3>
                  <p className="text-muted-foreground mb-4">{release.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href={release.link}>Read Press Release</a>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 bg-primary/5 rounded-lg border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Download className="w-6 h-6" /> Press Kit Downloads
            </h3>
            <p className="text-muted-foreground mb-6">
              Download our official press kit including logos, founder bios, and company information.
            </p>
            <Button className="bg-primary text-white hover:bg-blue-700" size="lg">
              Download Press Kit
            </Button>
          </div>

          <div className="mt-12 p-8 bg-card rounded-lg border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-2">Media Inquiries</h3>
            <p className="text-muted-foreground mb-4">
              For press inquiries, interviews, or media requests, please contact:
            </p>
            <div className="text-muted-foreground">
              <p className="font-semibold">press@dcore.com</p>
              <p className="text-sm">+91-XXXXXXXXXX</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}