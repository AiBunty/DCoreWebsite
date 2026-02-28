import { DCoreButton } from './DCoreButton';
import './HeroSection.css';
const heroConsultantImage =
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Build Better <span className="gradient-text">Automation Systems</span>
          </h1>
          <p className="hero-subtitle">
            Practical technology execution for communication, CRM, and digital transformation
          </p>

          <div className="hero-buttons">
            <DCoreButton variant="secondary" size="large">
              Watch Demo
            </DCoreButton>
          </div>

          <div className="hero-mascot">
            <img
              src={heroConsultantImage}
              alt="Dcore Systems automation consultant"
              className="mascot-image"
            />
          </div>

          <div className="hero-scroll">
            <div className="scroll-dot"></div>
            <span>Scroll to explore</span>
          </div>
        </div>
      </div>
    </section>
  );
}
