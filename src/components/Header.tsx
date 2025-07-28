import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navItems = [
    { 
      name: "Products & Services", 
      path: "/services",
      dropdown: [
        { name: "Data Analysis", desc: "Build better datasets for AI models", path: "/data-analysis" },
        { name: "Generative AI", desc: "LLM and RAGs as a service", path: "/generative-ai" },
        { name: "Data Backups and Consulting", desc: "Profile and manage your data", path: "/data-consulting" },
        { name: "Customized Machine Learning Models", desc: "Improve your ML development flow", path: "/ml-models" }
      ]
    },
    { 
      name: "Developers", 
      path: "/developers",
      dropdown: [
        { name: "GenAI for enterprise", desc: "Take full advantage of core workflows on existing solutions", path: "/genai-enterprise" },
        { name: "Actionable custom AI solutions", desc: "Adopt a Data approach towards the AI development", path: "/custom-ai" },
        { name: "Machine Learning + DevOps", desc: "MLOps to bridge the gap on data and IT Operation teams", path: "/mlops" },
        { name: "Capacity Building", desc: "Awareness, mentoring capacity and strategy guide on AI", path: "/capacity-building" }
      ]
    },
    { 
      name: "Industries", 
      path: "/industries",
      dropdown: [
        { name: "Financial Services", desc: "Getting easy with the payment sector", path: "/financial" },
        { name: "Telecommunications", desc: "Everything that involves communication", path: "/telecom" },
        { name: "Education Services", desc: "Everything that involves Learning and students", path: "/education" },
        { name: "Utilities", desc: "From electricity, to water supplies to public services", path: "/utilities" },
        { name: "Retail & Logistics", desc: "Great brands who chose secure data", path: "/retail" },
        { name: "Healthcare & Pharmacy", desc: "Health sector covered", path: "/healthcare" }
      ]
    },
    { 
      name: "Resources", 
      path: "/resources",
      dropdown: [
        { name: "Coming Soon", desc: "We Understand having right resource for AI is crucial, we are working on that.", path: "/resources" }
      ]
    },
    { 
      name: "Company", 
      path: "/about",
      dropdown: [
        { name: "About Us", desc: "Learn about our mission, vision and culture", path: "/about" },
        { name: "Partners", desc: "Innovative partners that are building the future of AI", path: "/partners" },
        { name: "Our Community", desc: "We are grateful being part of these communities", path: "/community" },
        { name: "Contact Us", desc: "We would love to hear from you!", path: "/contact" }
      ]
    },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-foreground">
              Quantum Intelligence
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`flex items-center text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.path) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                  <ChevronDown className="ml-1 h-3 w-3" />
                </Link>
                
                {/* Dropdown Menu */}
                {activeDropdown === item.name && item.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-background border border-border rounded-lg shadow-card z-50 animate-fade-in">
                    <div className="p-4 space-y-3">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className="block p-3 rounded-lg hover:bg-muted transition-colors"
                        >
                          <div className="font-medium text-foreground mb-1">{dropdownItem.name}</div>
                          <div className="text-sm text-muted-foreground">{dropdownItem.desc}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Book a demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.path) ? "text-primary" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-fit"
              >
                Book a demo
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;