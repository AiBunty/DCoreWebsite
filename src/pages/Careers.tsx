import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Briefcase, MapPin, Clock } from "lucide-react";

const jobs = [
  {
    title: "Senior React Developer",
    location: "India (Remote)",
    type: "Full-time",
    description: "Build responsive web applications using React, TypeScript, and modern frontend tools."
  },
  {
    title: "AI/ML Engineer",
    location: "India (Remote)",
    type: "Full-time",
    description: "Develop and integrate AI models for business automation and analytics."
  },
  {
    title: "Product Manager",
    location: "India (Remote)",
    type: "Full-time",
    description: "Lead product strategy and roadmap for our AI platform."
  },
  {
    title: "Customer Success Lead",
    location: "India (Remote)",
    type: "Full-time",
    description: "Ensure customer success and drive adoption of our platform."
  }
];

export default function Careers() {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground">
              Help us build the future of AI-powered business automation for India.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Open Positions</h2>
            <div className="space-y-4">
              {jobs.map((job, idx) => (
                <div key={idx} className="p-6 bg-card rounded-lg border border-border hover:border-primary transition">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 mb-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {job.type}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  <Button className="bg-primary text-white hover:bg-blue-700" size="sm">
                    Apply Now
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Don't see the right role?</h2>
          <p className="text-muted-foreground mb-6">Send us your resume and let's talk about opportunities.</p>
          <Button className="bg-primary text-white hover:bg-blue-700" size="lg">
            Send Resume
          </Button>
        </div>
      </section>
    </Layout>
  );
}