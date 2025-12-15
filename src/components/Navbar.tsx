import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

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
  { name: "For Consultants & Advisors", href: "/solutions/consultants" },
  { name: "For Event Planners", href: "/solutions/events" },
  { name: "For Agencies", href: "/solutions/agencies" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [compareOpen, setCompareOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">🐢</span>
            </div>
            <span className="font-bold text-xl text-foreground">Ai Bunty</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            
            {/* Compare Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                onMouseEnter={() => setCompareOpen(true)}
                onMouseLeave={() => setCompareOpen(false)}
              >
                Compare <ChevronDown className="w-4 h-4" />
              </button>
              <div 
                className={`absolute top-full left-0 mt-2 w-56 bg-card rounded-xl shadow-medium border border-border py-2 transition-all duration-200 ${compareOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onMouseEnter={() => setCompareOpen(true)}
                onMouseLeave={() => setCompareOpen(false)}
              >
                <Link to="/compare" className="block px-4 py-2 text-sm text-foreground font-medium hover:bg-accent transition-colors">
                  All Comparisons
                </Link>
                <div className="h-px bg-border my-1" />
                {compareLinks.map((link) => (
                  <Link key={link.href} to={link.href} className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                Solutions <ChevronDown className="w-4 h-4" />
              </button>
              <div 
                className={`absolute top-full left-0 mt-2 w-56 bg-card rounded-xl shadow-medium border border-border py-2 transition-all duration-200 ${solutionsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                {solutionLinks.map((link) => (
                  <Link key={link.href} to={link.href} className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="cta" size="lg" asChild>
              <Link to="/book-demo">Book Free Demo</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link to="/features" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                Features
              </Link>
              <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                Pricing
              </Link>
              <Link to="/compare" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                Compare
              </Link>
              <div className="pl-4 flex flex-col gap-2">
                {compareLinks.map((link) => (
                  <Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1">
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="text-muted-foreground py-2">Solutions</div>
              <div className="pl-4 flex flex-col gap-2">
                {solutionLinks.map((link) => (
                  <Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1">
                    {link.name}
                  </Link>
                ))}
              </div>
              <Button variant="cta" className="mt-4" asChild>
                <Link to="/book-demo">Book Free Demo</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
