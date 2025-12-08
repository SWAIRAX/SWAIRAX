import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useNavigationWithScroll } from "@/utils/navigation";
import Logo from "@/components/Logo";

const Header = () => {
  const navigate = useNavigate();
  const { navigateToTop } = useNavigationWithScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState<Record<string, boolean>>({});
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  // Lock body scroll when the mobile menu is open so the overlay covers the full page.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

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
      path: "/industries"
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
      name: "Research",
      path: "/research",
      // dropdown: [
      //     { name: "Comming Soon", desc: "Comprehensive guides and API docs", path: "#" },
      //     {name: "Research", desc: "Explore Quantum Intelligence’s evolving journey through innovation.", path: "/Research"},
      //     { name: "Whitepapers", desc: "In-depth research and industry insights", path: "/resources" },
      //     { name: "Video Tutorials", desc: "Step-by-step guides and webinars", path: "/resources" }
      // ]
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
        { name: "Partnerships", desc: "Explore partnership opportunities", path: "/partnerships" }
      ]
    },
  ];

  // Mobile-only simplified menu (no dropdowns)
  const mobileNavItems = [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: "Research", path: "/research" },
    { name: "About Us", path: "/about" },
    { name: "Partnerships", path: "/partnerships" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = (path: string) => {
    navigateToTop(path);
    setIsMenuOpen(false);
    setActiveDropdown(null);
    setOpenMobileDropdowns({});
  };

  return (
    <header className="fixed top-0 w-full bg-background border-b border-border z-[70] shadow-sm">
      <div className="container mx-auto px-5 py-3.5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => navigateToTop('/')}
            className="flex items-center gap-1.5 md:gap-2 hover:opacity-90 transition-opacity"
          >
            <picture>
              <img
                src="/uploads/logo.png"
                alt="Quantum Intelligence Logo"
                className="h-10 w-auto object-contain"
                style={{ maxWidth: "168px" }}
              />
            </picture>
            <div
              className={`${isMenuOpen ? "flex" : "hidden md:flex"} flex-col items-start justify-center leading-tight text-lg md:text-xl font-semibold text-foreground`}
              style={{ lineHeight: 1.05 }}
            >
              <span>Quantum</span>
              <span>Intelligence</span>
            </div>
          </button>

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
                    <button
                      onClick={() => {
                        if (item.dropdown) {
                          setActiveDropdown(item.name);
                        } else {
                          navigateToTop(item.path);
                        }
                      }}
                      className={`flex items-center text-sm font-medium transition-colors hover:text-primary ${
                        isActive(item.path) ? "text-primary" : "text-muted-foreground"
                      }`}
                      style={{ paddingRight: item.dropdown ? 0 : undefined }}
                    >
                      {item.name}
                    </button>
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
                          <button
                            key={dropdownItem.name}
                            onClick={() => {
                              navigateToTop(dropdownItem.path);
                              setActiveDropdown(null);
                            }}
                            className="block w-full text-left p-3 rounded-lg hover:bg-muted transition-colors"
                          >
                            <div className="font-medium text-foreground mb-1">{dropdownItem.name}</div>
                            <div className="text-sm text-muted-foreground">{dropdownItem.desc}</div>
                          </button>
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
            <Button
              variant="outline"
              onClick={() => navigateToTop('/contact')}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Estimate Project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              if (isMenuOpen) {
                setOpenMobileDropdowns({});
              }
            }}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-[80] bg-background text-foreground border-t border-border/60 shadow-2xl">
            <div className="container mx-auto px-6 pt-10 pb-12 flex flex-col h-full">
              <div className="flex items-center justify-between border-b border-border/70 pb-4 mb-6">
                <button
                  onClick={() => handleNavClick('/')}
                  className="flex items-center gap-1.5 md:gap-2 hover:opacity-90 transition-opacity"
                  aria-label="Go to home"
                >
                  <picture>
                    <img
                      src="/uploads/logo.png"
                      alt="Quantum Intelligence Logo"
                      className="h-10 w-auto object-contain"
                      style={{ maxWidth: "168px" }}
                    />
                  </picture>
                  <div className="flex flex-col items-start justify-center leading-tight text-lg md:text-xl font-semibold text-foreground" style={{ lineHeight: 1.05 }}>
                    <span>Quantum</span>
                    <span>Intelligence</span>
                  </div>
                </button>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-muted/70 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto space-y-4">
                {mobileNavItems.map((item) => (
                  <div key={item.name} className="border-b border-border/60 pb-3">
                    <button
                      onClick={() => handleNavClick(item.path)}
                      className={`w-full text-left text-base font-semibold tracking-wide transition-colors ${
                        isActive(item.path) ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {item.name}
                    </button>
                  </div>
                ))}
              </nav>

              <div className="pt-6 border-t border-border/60">
                <Button
                  variant="outline"
                  onClick={() => handleNavClick('/contact')}
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground py-4 text-base font-semibold rounded-xl"
                >
                  Estimate Project
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
