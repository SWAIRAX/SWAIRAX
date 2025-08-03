import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "@/components/Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  const navItems = [
    {
      name: "Products&Services",
      path: "/services",
      // dropdown: [
      //   { name: "Data Analysis", desc: "Build better datasets for AI models", path: "/data-analysis" },
      //   { name: "Generative AI", desc: "LLM and RAGs as a service", path: "/generative-ai" },
      //   { name: "Data Backups and Consulting", desc: "Profile and manage your data", path: "/data-consulting" },
      //   { name: "Customized Machine Learning Models", desc: "Improve your ML development flow", path: "/ml-models" }
      // ]
    },
    {
      name: "Industries",
      path: "/industries",
      dropdown: [
        { name: "Financial Services", desc: "Getting easy with the payment sector", path: "/industries/financial-services" },
        { name: "Telecommunications", desc: "Everything that involves communication", path: "/industries/telecommunications" },
        { name: "Education Services", desc: "Everything that involves Learning and students", path: "/industries/education-services" },
        { name: "Utilities", desc: "From electricity, to water supplies to public services", path: "/industries/utilities" },
        { name: "Retail & Logistics", desc: "Great brands who chose secure data", path: "/industries/retail-logistics" },
        { name: "Healthcare & Pharmacy", desc: "Health sector covered", path: "/industries/healthcare-pharmacy" }
      ]
    },
    // {
    //   name: "Clients",
    //   path: "/clients",
    //   dropdown: [
    //     { name: "Client for enterprise", desc: "Take full advantage of core workflows on existing solutions", path: "/client-enterprise" },
    //     { name: "Actionable custom AI solutions", desc: "Adopt a Data approach towards the AI development", path: "/custom-ai" },
    //     { name: "Machine Learning + DevOps", desc: "MLOps to bridge the gap on data and IT Operation teams", path: "/mlops" },
    //     { name: "Capacity Building", desc: "Awareness, mentoring capacity and strategy guide on AI", path: "/capacity-building" }
    //   ]
    // },
    {
      name: "Resources",
      path: "#",
      dropdown: [
        { name: "Comming Soon", desc: "Comprehensive guides and API docs", path: "#" },
        {name: "Research", desc: "Explore Quantum Intelligence’s evolving journey through innovation.", path: "/Research"},
      //   { name: "Whitepapers", desc: "In-depth research and industry insights", path: "/resources" },
      //   { name: "Video Tutorials", desc: "Step-by-step guides and webinars", path: "/resources" }
      ]
    },
    // {
    //   name: "Blog",
    //   path: "/blog",
    //   dropdown: [
    //     { name: "Latest Articles", desc: "Stay updated with our latest insights", path: "/blog" },
    //     { name: "AI & Data Science", desc: "Technical articles and tutorials", path: "/blog" },
    //     { name: "Case Studies", desc: "Real-world AI implementation stories", path: "/blog" }
    //   ]
    // },
    // {
    //   name: "About Us",
    //   path: "/about",
    //   dropdown: [
    //     { name: "Our Story", desc: "Learn about our mission and vision", path: "/about" },
    //     { name: "Our Team", desc: "Meet the people behind Quantum Intelligence", path: "/about" },
    //     { name: "Partners", desc: "Innovative partners building the future of AI", path: "/about" }
    //   ]
    // },
    {
      name: "company",
      path: "/contact",
      dropdown: [
        { name: "About Us", desc: "Learn about our mission and vision", path: "/about" },
        { name: "Contact Us", desc: "Technical support and assistance", path: "/contact" },
        { name: "Partnerships", desc: "Explore partnership opportunities", path: "/contact" }
      ]
    },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
            <picture>
              <img
              src="/uploads/logo.png"
              alt="Quantum Intelligence Logo"
              className="h-8 w-auto object-contain"
              style={{ maxWidth: "160px" }}
              />
            </picture>
            <div
              className="text-lg sm:text-xl md:text-2xl text-foreground whitespace-nowrap"
              // style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
            >
              Quantum Intelligence
            </div>
            </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const showDropdown = activeDropdown === item.name && item.dropdown;
              return (
                <div
                  key={item.name}
                  className="relative flex items-center"
                  tabIndex={0}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget)) setActiveDropdown(null);
                  }}
                  onMouseEnter={() => {
                    if (item.dropdown) {
                      if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
                      setActiveDropdown(item.name);
                    }
                  }}
                  onMouseLeave={() => {
                    if (item.dropdown) {
                      dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 120);
                    }
                  }}
                  onFocus={() => item.dropdown && setActiveDropdown(item.name)}
                  onKeyDown={(e) => {
                    if (item.dropdown && (e.key === 'Enter' || e.key === ' ')) {
                      setActiveDropdown(activeDropdown === item.name ? null : item.name);
                    }
                  }}
                >
                  <span className="flex items-center">
                    <Link
                      to={item.path}
                      className={`flex items-center text-sm font-medium transition-colors hover:text-primary ${
                        isActive(item.path) ? "text-primary" : "text-muted-foreground"
                      }`}
                      style={{ paddingRight: item.dropdown ? 0 : undefined }}
                      onClick={e => {
                        if (item.dropdown) {
                          e.preventDefault();
                          setActiveDropdown(item.name);
                        }
                      }}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <button
                        type="button"
                        className="ml-1 flex items-center bg-transparent border-none outline-none p-0"
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        aria-haspopup="true"
                        aria-expanded={activeDropdown === item.name}
                        tabIndex={-1}
                      >
                        <ChevronDown className="h-3 w-3" />
                      </button>
                    )}
                  </span>

                  {/* Dropdown Menu */}
                  {showDropdown && (
                    <div
                      className="absolute top-full left-0 mt-2 w-80 bg-background border border-border rounded-lg shadow-card z-50 animate-fade-in"
                      onMouseEnter={() => {
                        if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
                        setActiveDropdown(item.name);
                      }}
                      onMouseLeave={() => {
                        dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 120);
                      }}
                    >
                      <div className="p-4 space-y-3">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block p-3 rounded-lg hover:bg-muted transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="font-medium text-foreground mb-1">{dropdownItem.name}</div>
                            <div className="text-sm text-muted-foreground">{dropdownItem.desc}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Link to="/contact">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Estimate Project
              </Button>
            </Link>
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
              {navItems.map((item) => {
                // Skip the company dropdown in mobile, show direct About Us link instead
                if (item.name === 'company') {
                  return (
                    <Link
                      key="about-mobile"
                      to="/about"
                      className={`text-sm font-medium transition-colors hover:text-primary ${
                        isActive("/about") ? "text-primary" : "text-muted-foreground"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About Us
                    </Link>
                  );
                }

                return (
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
                );
              })}
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-fit"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Estimate Project
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
