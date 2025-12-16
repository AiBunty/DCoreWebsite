import { Link } from "react-router-dom";
import aiBuntyLogo from "@/assets/ai-bunty-logo-new.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <img 
                src={aiBuntyLogo} 
                alt="Ai Bunty" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-background/70 text-sm">
              Your AI-Powered Business Growth Partner. Funnels, CRM, WhatsApp automation, and more.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link to="/solutions/coaches" className="hover:text-background transition-colors">For Coaches</Link></li>
              <li><Link to="/solutions/real-estate" className="hover:text-background transition-colors">For Real Estate</Link></li>
              <li><Link to="/solutions/fitness" className="hover:text-background transition-colors">For Fitness Clubs</Link></li>
              <li><Link to="/solutions/consultants" className="hover:text-background transition-colors">For Consultants</Link></li>
              <li><Link to="/solutions/events" className="hover:text-background transition-colors">For Event Planners</Link></li>
              <li><Link to="/solutions/agencies" className="hover:text-background transition-colors">For Agencies</Link></li>
            </ul>
          </div>

          {/* Compare */}
          <div>
            <h4 className="font-semibold mb-4">Compare</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link to="/compare/flexifunnels" className="hover:text-background transition-colors">vs Flexifunnels</Link></li>
              <li><Link to="/compare/tagmango" className="hover:text-background transition-colors">vs TagMango</Link></li>
              <li><Link to="/compare/gohighlevel" className="hover:text-background transition-colors">vs GoHighLevel</Link></li>
              <li><Link to="/compare/kajabi" className="hover:text-background transition-colors">vs Kajabi</Link></li>
              <li><Link to="/compare/graphy" className="hover:text-background transition-colors">vs Graphy</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link to="/features" className="hover:text-background transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-background transition-colors">Pricing</Link></li>
              <li><Link to="/book-demo" className="hover:text-background transition-colors">Book Demo</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-sm text-background/60">
          <p>© {new Date().getFullYear()} DCore Systems LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
