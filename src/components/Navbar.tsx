import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import aiBuntyLogo from "@/assets/ai-bunty-logo-new.png";

const compareLinks = [
  { name: "vs Flexifunnels", href: "/compare/flexifunnels" },
  { name: "vs TagMango", href: "/compare/tagmango" },
  { name: "vs Graphy", href: "/compare/graphy" },
  { name: "vs GoHighLevel", href: "/compare/gohighlevel" },
  { name: "vs Kajabi", href: "/compare/kajabi" },
  { name: "vs AiSensy", href: "/compare/aisensy" },
  { name: "vs Skool", href: "/compare/skool" },
];

const solutionLinks = [
  { name: "For Coaches", href: "/solutions/coaches" },
  { name: "For Real Estate", href: "/solutions/real-estate" },
  { name: "For Fitness Clubs", href: "/solutions/fitness" },
  { name: "For Consultants", href: "/solutions/consultants" },
  { name: "For Event Planners", href: "/solutions/events" },
  { name: "For Agencies", href: "/solutions/agencies" },
  { name: "For Financial Advisors", href: "/solutions/financial-advisors" },
  { name: "For Health Clinics", href: "/solutions/health-clinics" },
  { name: "For Freelancers", href: "/solutions/freelancers" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [compareOpen, setCompareOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={aiBuntyLogo} 
              alt="Ai Bunty" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/features" className="text-primary hover:text-blue-700 transition-colors font-medium">
              Features
            </Link>
            <Link to="/pricing" className="text-primary hover:text-blue-700 transition-colors font-medium">
              Pricing
            </Link>
            <Link to="/testimonials" className="text-primary hover:text-blue-700 transition-colors font-medium">
              Testimonials
            </Link>
            
            {/* Compare Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-primary hover:text-blue-700 transition-colors font-medium"
                onMouseEnter={() => setCompareOpen(true)}
                onMouseLeave={() => setCompareOpen(false)}
              >
                Compare <ChevronDown className="w-4 h-4" />
              </button>
              <div 
                className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 transition-all duration-200 ${compareOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onMouseEnter={() => setCompareOpen(true)}
                onMouseLeave={() => setCompareOpen(false)}
              >
                <Link to="/compare" className="block px-4 py-2 text-sm text-primary font-medium hover:bg-blue-50 transition-colors">
                  All Comparisons
                </Link>
                <div className="h-px bg-gray-200 my-1" />
                {compareLinks.map((link) => (
                  <Link key={link.href} to={link.href} className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-blue-50 transition-colors">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-primary hover:text-blue-700 transition-colors font-medium"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                Solutions <ChevronDown className="w-4 h-4" />
              </button>
              <div 
                className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 transition-all duration-200 ${solutionsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                {solutionLinks.map((link) => (
                  <Link key={link.href} to={link.href} className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-blue-50 transition-colors">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Theme Toggle + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Button className="bg-primary text-white hover:bg-blue-700" size="lg" asChild>
              <Link to="/book-demo">Book Free Demo</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-primary font-medium">Theme</span>
                <ThemeToggle />
              </div>
              <Link to="/features" className="text-primary hover:text-blue-700 transition-colors py-2 font-medium">
                Features
              </Link>
              <Link to="/pricing" className="text-primary hover:text-blue-700 transition-colors py-2 font-medium">
                Pricing
              </Link>
              <Link to="/testimonials" className="text-primary hover:text-blue-700 transition-colors py-2 font-medium">
                Testimonials
              </Link>
              <Link to="/compare" className="text-primary hover:text-blue-700 transition-colors py-2 font-medium">
                Compare
              </Link>
              <div className="pl-4 flex flex-col gap-2">
                {compareLinks.map((link) => (
                  <Link key={link.href} to={link.href} className="text-sm text-gray-600 hover:text-primary transition-colors py-1">
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="text-primary py-2 font-medium">Solutions</div>
              <div className="pl-4 flex flex-col gap-2">
                {solutionLinks.map((link) => (
                  <Link key={link.href} to={link.href} className="text-sm text-gray-600 hover:text-primary transition-colors py-1">
                    {link.name}
                  </Link>
                ))}
              </div>
              <Button className="bg-white text-primary hover:bg-white/90 mt-4" asChild>
                <Link to="/book-demo">Book Free Demo</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
