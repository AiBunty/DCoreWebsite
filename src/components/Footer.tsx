import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import './DcoreFooter.css';
import aiBuntyLogo from '@/assets/ai-bunty-logo-new.png';

const footerLinks = [
  {
    title: 'Products',
    links: [
      { name: 'AI Solutions', href: '/features' },
      { name: 'Cloud Services', href: '/features' },
      { name: 'Analytics', href: '/features' },
      { name: 'Security', href: '/features' }
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Press Kit', href: '/press' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'Guides', href: '/guides' },
      { name: 'Support', href: '/support' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Compliance', href: '/compliance' }
    ]
  }
];

export function Footer() {
  return (
    <footer className="footer glass-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo-group">
              <img
                src={aiBuntyLogo}
                alt="Logo"
                className="footer-favicon"
              />
            </div>
            <p className="footer-tagline">Your AI-Powered Solutions Partner</p>
            <div className="social-links">
              <a href="https://facebook.com" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            {footerLinks.map((column) => (
              <div key={column.title} className="footer-column">
                <h4>{column.title}</h4>
                {column.links.map((link) => (
                  <Link key={link.name} to={link.href}>
                    {link.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 D'CORE SYSTEMS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
