import { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Menu, X, CheckCheck, ChevronDown, Sun, Moon } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useNavigationWithScroll } from "@/utils/navigation";

type NavItem = {
  name: string;
  path: string;
  dropdown?: { name: string; desc: string; path: string }[];
};

// Light/dark switch — guarded with a mounted flag so the icon matches the
// resolved theme on first paint.
const ThemeToggle = ({ className = "" }: { className?: string }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = resolvedTheme === "dark";
  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`inline-flex h-9 w-9 items-center justify-center bg-transparent text-foreground/60 hover:text-foreground hover:scale-110 transition-all ${className}`}
    >
      {mounted && isDark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
    </button>
  );
};

const Header = () => {
  const { navigateToTop } = useNavigationWithScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  // Lock body scroll when the mobile menu is open so the overlay covers the full page.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  const navItems: NavItem[] = [
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Sectors", path: "/sectors" },
    { name: "Blog", path: "/blog" },
  ];

  const companyItem: NavItem = {
    name: "Company",
    path: "/about",
    dropdown: [
      { name: "About Us", desc: "Our story, mission, and team", path: "/about" },
      { name: "Contact Us", desc: "Start a project or get in touch", path: "/contact" },
    ],
  };

  // Mobile-only simplified menu (no dropdowns)
  const mobileNavItems = [
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Sectors", path: "/sectors" },
    { name: "Blog", path: "/blog" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = (path: string) => {
    navigateToTop(path);
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const renderNavItem = (item: NavItem, alignRight = false) => {
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
          if (item.dropdown && (e.key === "Enter" || e.key === " ")) {
            setActiveDropdown(activeDropdown === item.name ? null : item.name);
          }
        }}
      >
        <button
          onClick={() => {
            if (item.dropdown) {
              setActiveDropdown(item.name);
            } else {
              navigateToTop(item.path);
            }
          }}
          className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-foreground ${
            isActive(item.path) ? "text-primary" : "text-foreground/60"
          }`}
        >
          {item.name}
          {item.dropdown && <ChevronDown className="h-3.5 w-3.5" />}
        </button>

        {showDropdown && (
          <div
            className={`absolute top-full mt-3 w-80 rounded-xl border border-black/10 bg-card shadow-2xl animate-fade-in ${
              alignRight ? "right-0" : "left-0"
            }`}
            onMouseEnter={() => {
              if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
              setActiveDropdown(item.name);
            }}
            onMouseLeave={() => {
              dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 120);
            }}
          >
            <div className="p-3 space-y-1">
              {item.dropdown!.map((d) => (
                <button
                  key={d.name}
                  onClick={() => {
                    navigateToTop(d.path);
                    setActiveDropdown(null);
                  }}
                  className="block w-full text-left p-3 rounded-lg hover:bg-muted transition-colors"
                >
                  <div className="font-medium text-foreground mb-0.5">{d.name}</div>
                  <div className="text-sm text-muted-foreground">{d.desc}</div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const Wordmark = ({ className = "" }: { className?: string }) => (
    <button
      onClick={() => handleNavClick("/")}
      className={`flex items-center gap-2 hover:opacity-90 transition-opacity ${className}`}
      aria-label="Go to home"
    >
      <img src="/SWAI3.png" alt="SWAIRAX" className="h-24 w-auto object-contain" style={{ maxWidth: "380px" }} />
    </button>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-[70] px-3 sm:px-6 lg:px-16 xl:px-20">
      <div className="relative mx-auto flex h-[70px] items-center justify-between rounded-b-[20px] border-x border-b border-border/60 px-4 sm:px-6 shadow-[0_12px_30px_-16px_rgba(0,0,0,0.25)] bg-card/95 backdrop-blur-sm supports-[backdrop-filter]:bg-card/80">
        {/* LEFT — desktop nav links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => renderNavItem(item))}
        </nav>

        {/* LEFT — mobile logo */}
        <Wordmark className="lg:hidden" />

        {/* CENTER — logo (desktop, absolutely centered) */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2">
          <Wordmark />
        </div>

        {/* RIGHT — Company menu + theme toggle + CTA (desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          {renderNavItem(companyItem, true)}
          <ThemeToggle />
          <button
            onClick={() => navigateToTop("/contact")}
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background hover:bg-foreground/90 transition-colors"
          >
            <CheckCheck className="h-4 w-4" />
            Get Started
          </button>
        </div>

        {/* RIGHT — mobile theme toggle + hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[80] bg-background text-foreground">
          <div className="container mx-auto px-6 pt-10 pb-12 flex flex-col h-full">
            <div className="flex items-center justify-between border-b border-border/70 pb-4 mb-6">
              <Wordmark />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full hover:bg-muted transition-colors text-foreground"
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
                onClick={() => handleNavClick("/contact")}
                className="w-full inline-flex items-center justify-center gap-1.5 rounded-full bg-foreground px-5 py-4 text-base font-semibold text-background hover:bg-foreground/90"
              >
                <CheckCheck className="h-4 w-4" />
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
