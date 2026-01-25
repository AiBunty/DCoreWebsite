import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { DCoreButton } from './DCoreButton';
import './DCoreNavbar.css';
import aiBuntyLogo from '@/assets/ai-bunty-logo-new.png';

export function DCoreNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-glass' : ''}`}>
      <div className="container navbar-container">
        <div className="navbar-brand">
          <img
            src={aiBuntyLogo}
            alt="Ai Bunty"
            className="navbar-logo"
          />
          <span className="navbar-text">Ai Bunty</span>
        </div>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <a href="/">Home</a>
          <a href="/features">Features</a>
          <a href="/pricing">Pricing</a>
          <a href="/compare">Compare</a>
        </div>

        <div className="navbar-actions">
          <ThemeToggle />
          <DCoreButton variant="primary" size="default">
            Get Started
          </DCoreButton>
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
