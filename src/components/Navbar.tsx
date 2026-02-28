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
  { name: "For Agencies", href: "/solutions/agencies" },
  { name: "For Real Estate", href: "/solutions/real-estate" },
  { name: "For Health Clinics", href: "/solutions/health-clinics" },
  { name: "For Consultants", href: "/solutions/consultants" },
  { name: "For Event Businesses", href: "/solutions/events" },
  { name: "For Fitness Clubs", href: "/solutions/fitness" },
  { name: "For Financial Advisors", href: "/solutions/financial-advisors" },
  { name: "For Freelancers", href: "/solutions/freelancers" },
  { name: "For Coaches", href: "/solutions/coaches" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [compareOpen, setCompareOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileCompareOpen, setMobileCompareOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/assets/logo.png" 
              alt="Dcore Systems logo" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/features" className="text-gray-900 hover:text-gray-700 transition-colors font-medium">
              Features
            </Link>
            <Link to="/pricing" className="text-gray-900 hover:text-gray-700 transition-colors font-medium">
              Pricing
            </Link>
            
            {/* Compare Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCompareOpen(true)}
              onMouseLeave={() => setCompareOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-gray-900 hover:text-gray-700 transition-colors font-medium"
              >
                Compare <ChevronDown className="w-4 h-4" />
              </button>
              <div 
                className={`absolute top-full left-0 mt-0 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 transition-all duration-200 ${compareOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
              >
                <Link to="/compare" className="block px-4 py-2 text-sm text-gray-900 font-medium hover:bg-gray-100 transition-colors">
                  All Comparisons
                </Link>
                <div className="h-px bg-gray-200 my-1" />
                {compareLinks.map((link) => (
                  <Link key={link.href} to={link.href} className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-gray-900 hover:text-gray-700 transition-colors font-medium"
              >
                Solutions <ChevronDown className="w-4 h-4" />
              </button>
              <div 
                className={`absolute top-full left-0 mt-0 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 transition-all duration-200 ${solutionsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
              >
                {solutionLinks.map((link) => (
                  <Link key={link.href} to={link.href} className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://login.aibunty.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-gray-900 font-medium border-2 border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-all"
            >
              Members Login
            </a>
            <Button className="bg-gray-900 text-white hover:bg-gray-800" size="lg" asChild>
              <Link to="/book-demo">Book Free Demo</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              className="p-2 text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col gap-4">
              <Link to="/features" className="text-gray-900 hover:text-gray-700 transition-colors py-2 font-medium">
                Features
              </Link>
              <Link to="/pricing" className="text-gray-900 hover:text-gray-700 transition-colors py-2 font-medium">
                Pricing
              </Link>

              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-3 py-2 text-gray-900 font-medium"
                  onClick={() => setMobileCompareOpen((prev) => !prev)}
                  aria-expanded={mobileCompareOpen}
                  aria-controls="mobile-compare-drawer"
                >
                  <span>Compare</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${mobileCompareOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileCompareOpen && (
                  <div id="mobile-compare-drawer" className="border-t border-gray-200 bg-gray-50 px-3 py-2 flex flex-col gap-2">
                    <Link
                      to="/compare"
                      className="text-sm text-gray-900 font-medium hover:text-gray-700 transition-colors py-1"
                    >
                      All Comparisons
                    </Link>
                    {compareLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="text-sm text-gray-700 hover:text-gray-900 transition-colors py-1"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-3 py-2 text-gray-900 font-medium"
                  onClick={() => setMobileSolutionsOpen((prev) => !prev)}
                  aria-expanded={mobileSolutionsOpen}
                  aria-controls="mobile-solutions-drawer"
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${mobileSolutionsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileSolutionsOpen && (
                  <div id="mobile-solutions-drawer" className="border-t border-gray-200 bg-gray-50 px-3 py-2 flex flex-col gap-2">
                    {solutionLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="text-sm text-gray-700 hover:text-gray-900 transition-colors py-1"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <a
                href="https://login.aibunty.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-center text-gray-900 font-medium border-2 border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-all"
              >
                Members Login
              </a>
              <Button className="bg-gray-900 text-white hover:bg-gray-800 mt-4" asChild>
                <Link to="/book-demo">Book Free Demo</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

