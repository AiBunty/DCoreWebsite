import { DCoreButton } from './DCoreButton';
import './HeroSection.css';
import mascotImage from '@/assets/ai-bunty-mascot.png';

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
            Unleash Your <span className="gradient-text">AI Potential</span>
          </h1>
          <p className="hero-subtitle">
            Powerful AI solutions designed for businesses that dare to innovate
          </p>

          <div className="hero-buttons">
            <DCoreButton variant="primary" size="large">
              Start Free Trial
            </DCoreButton>
            <DCoreButton variant="secondary" size="large">
              Watch Demo
            </DCoreButton>
          </div>

          <div className="hero-mascot">
            <img
              src={mascotImage}
              alt="Ai Bunty"
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
