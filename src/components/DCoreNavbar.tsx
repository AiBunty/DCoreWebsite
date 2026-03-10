import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { DCoreButton } from './DCoreButton';
import './DCoreNavbar.css';

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
            src="/assets/logo.png"
            alt="Dcore Systems logo"
            className="navbar-logo"
          />
          <span className="navbar-text">Dcore Systems</span>
        </div>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <a href="/">Home</a>
          <a href="/features">Features</a>
          <a href="/pricing">Pricing</a>
          <a href="/compare">Compare</a>
          <a href="/agreement-generator">Tools</a>
        </div>

        <div className="navbar-actions">
          <a
            href="https://login.aibunty.com"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-login-link"
            aria-label="Members Login"
          >
            Members Login
          </a>
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

