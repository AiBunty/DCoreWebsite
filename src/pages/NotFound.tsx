import { Layout } from "@/components/Layout";
import { AntigravityBg } from "@/components/home/AntigravityBg";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Layout>
      <AntigravityBg />
      
      <Section className="relative z-10 min-h-[60vh] flex items-center justify-center">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-9xl font-bold text-gray-900 mb-6 animate-slide-up" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
              404
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-up" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
              Page Not Found
            </h1>
            <p className="text-xl text-gray-500 mb-8 animate-slide-up" style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link 
              to="/" 
              className="inline-block px-8 py-4 bg-gray-900 text-white rounded-full font-bold shadow-xl hover:bg-gray-800 transition-all"
            >
              Back to Home
            </Link>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

